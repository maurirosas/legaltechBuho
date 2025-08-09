import React, {
  useEffect,
  useState,
  useContext,
  useRef,
  useLayoutEffect,
} from "react";
import { Chat } from "../../styles/Chat.styled";
import { Chat__messagesComponent } from "./Chat__messages";
import { Chat__inputComponent } from "./Chat__input";
import {
  ensureChat,
  fetchMessages,
  subscribeMessages,
  sendUserMessage,
} from "../../services/chatService";
import { AuthContext } from "../../context/AuthContext";
import { callAI } from "../../services/ai";

export const ChatComponent = () => {
  const { user } = useContext(AuthContext);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const unsubRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => {
    if (!bottomRef.current) return;
    // espera a que el último nodo exista antes de scrollear
    requestAnimationFrame(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    });
  };

  // autoscroll cuando cambia la cantidad de mensajes
  useLayoutEffect(() => {
    scrollToBottom();
  }, [messages.length]);

  // cargar/crear chat + historial + suscripción realtime
  useEffect(() => {
    if (!user?.id) return;

    (async () => {
      const id = await ensureChat(user.id);
      setChatId(id);

      const rows = await fetchMessages(id);
      setMessages(
        rows.map((r) => ({
          id: r.id,
          text: r.content,
          isUser: r.sender === "user",
          created_at: r.created_at,
        }))
      );

      // suscribirse a inserts del chat
      unsubRef.current?.();
      unsubRef.current = subscribeMessages(id, (row) => {
        const clientId = row?.metadata?.client_id;

        setMessages((prev) => {
          // evita duplicados exactos por id
          if (row.id && prev.some((m) => m.id === row.id)) return prev;

          // reconciliar con el optimista si coincide client_id
          if (clientId) {
            const i = prev.findIndex(
              (m) => m.pending && m.clientId === clientId
            );
            if (i !== -1) {
              const copy = [...prev];
              copy[i] = {
                id: row.id,
                text: row.content,
                isUser: row.sender === "user",
                created_at: row.created_at,
              };
              return copy;
            }
          }

          // si no es eco de un pendiente, agregar normal
          return [
            ...prev,
            {
              id: row.id,
              text: row.content,
              isUser: row.sender === "user",
              created_at: row.created_at,
            },
          ];
        });

        // si llegó respuesta del asistente, apaga el indicador typing
        if (row.sender === "assistant") setTyping(false);
      });
    })();

    return () => unsubRef.current?.();
  }, [user?.id]);

  const handleSend = async (userText) => {
    if (!chatId || !user?.id) return;

    // 1) UI optimista
    const clientId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { text: userText, isUser: true, pending: true, clientId },
    ]);

    // 2) Insert a DB (Realtime reemplazará el pendiente)
    try {
      await sendUserMessage(chatId, user.id, userText, clientId);
    } catch (e) {
      // marca el pendiente con error
      setMessages((prev) =>
        prev.map((m) =>
          m.pending && m.clientId === clientId ? { ...m, error: true } : m
        )
      );
      return; // no sigas si no se guardó
    }

    // 3) Llamar a la IA (la función insertará 'assistant' y Realtime lo pintará)
    setTyping(true);
    try {
      await callAI(chatId, userText);
    } catch (e) {
      console.error("AI error", e);
      setTyping(false);
      // mensaje de sistema de fallback opcional
      setMessages((prev) => [
        ...prev,
        { text: "No pude obtener respuesta del asistente.", isUser: false },
      ]);
    }
  };

  const messagesToShow = messages.length
    ? messages
    : [{ text: "Hola, ¿en qué puedo ayudarte?", isUser: false }];

  return (
    <Chat>
      <Chat__messagesComponent
        messages={messagesToShow}
        bottomRef={bottomRef}
        typing={typing}
      />
      <Chat__inputComponent onSend={handleSend} />
    </Chat>
  );
};
