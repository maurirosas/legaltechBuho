import React, { useEffect, useState, useContext, useRef } from "react";
import { Chat } from "../../styles/Chat.styled";
import { Chat__messagesComponent } from "./Chat__messages";
import { Chat__inputComponent } from "./Chat__input";
import {
  ensureChat, fetchMessages, subscribeMessages, sendUserMessage
} from "../../services/chatService";
import { AuthContext } from "../../context/AuthContext";

import { callAI } from "../../services/ai";

export const ChatComponent = () => {
  const { user } = useContext(AuthContext);
  const [chatId, setChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const unsubRef = useRef(null);
  const bottomRef = useRef(null);

  const scrollToBottom = () => bottomRef.current?.scrollIntoView({ behavior: "smooth" });

  // cargar/crear chat + historial + realtime
  useEffect(() => {
    if (!user?.id) return;

    (async () => {
      const id = await ensureChat(user.id);
      setChatId(id);

      const rows = await fetchMessages(id);
      setMessages(rows.map(r => ({
        id: r.id,
        text: r.content,
        isUser: r.sender === "user",
        created_at: r.created_at
      })));
      scrollToBottom();

      unsubRef.current?.();
      unsubRef.current = subscribeMessages(id, (row) => {
        // reconciliar si es el eco del pendiente (comparamos metadata.client_id)
        const clientId = row?.metadata?.client_id;
        setMessages(prev => {
          if (clientId) {
            const i = prev.findIndex(m => m.pending && m.clientId === clientId);
            if (i !== -1) {
              const copy = [...prev];
              copy[i] = {
                id: row.id,
                text: row.content,
                isUser: row.sender === "user",
                created_at: row.created_at
              };
              return copy;
            }
          }
          // si no es eco o no había pendiente, lo agregamos normal
          return [...prev, {
            id: row.id,
            text: row.content,
            isUser: row.sender === "user",
            created_at: row.created_at
          }];
        });
        scrollToBottom();
      });
    })();

    return () => unsubRef.current?.();
  }, [user?.id]);

  const handleSend = async (userText) => {
    if (!chatId || !user?.id) return;

    // 1) UI optimista
    const clientId = crypto.randomUUID();
    setMessages(prev => [...prev, {
      text: userText,
      isUser: true,
      pending: true,
      clientId
    }]);
    scrollToBottom();

    // 2) insertar en DB (cuando llegue el evento realtime, reemplazará al pendiente)
    try {
      await sendUserMessage(chatId, user.id, userText, clientId);
    } catch (e) {
      // si falla, marcamos error en el “pendiente”
      setMessages(prev => prev.map(m =>
        m.pending && m.clientId === clientId ? { ...m, error: true } : m
      ));
    }

    // ahora pedimos a la IA (la respuesta la insertará la función y llegará por Realtime)
    try {
      await callAI(chatId, userText);
      // opcional: puedes mostrar un "escribiendo..." hasta que llegue el mensaje del asistente
    } catch (e) {
      console.error("AI error", e);
      // opcional: mostrar un mensaje de error en la UI
    }
    // 3) aquí luego llamas a tu backend de IA y, cuando responda,
    // insertas el mensaje del assistant (no hace falta optimista para el bot):
    // const aiReply = await callIA(userText, history);
    // await sendAssistantMessage(chatId, aiReply);
  };

  const messagesToShow = messages.length
    ? messages
    : [{ text: "Hola, ¿en qué puedo ayudarte?", isUser: false }];

  return (
    <Chat>
      <Chat__messagesComponent messages={messagesToShow} />
      <div ref={bottomRef} />
      <Chat__inputComponent onSend={handleSend} />
    </Chat>
  );
};
