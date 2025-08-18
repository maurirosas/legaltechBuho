import React, {useContext, useEffect, useLayoutEffect, useRef, useState,} from "react";
import {Chat} from "../../styles/Chat.styled";
import {Chat__messagesComponent} from "./Chat__messages";
import {Chat__inputComponent} from "./Chat__input";
import {createNewChat, fetchMessages, sendUserMessage, subscribeMessages,} from "../../services/chatService";
import {AuthContext} from "../../context/AuthContext";
import {callAI} from "../../services/ai";

export const ChatComponent = ({chatId: chatIdFromRoute}) => {
    const {user} = useContext(AuthContext);
    const [chatId, setChatId] = useState(chatIdFromRoute ?? null); // inicializar si viene
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const unsubRef = useRef(null);
    const bottomRef = useRef(null);

    const scrollToBottom = () => {
        if (!bottomRef.current) return;
        requestAnimationFrame(() => {
            bottomRef.current?.scrollIntoView({behavior: "smooth", block: "end"});
        });
    };

    useLayoutEffect(() => {
        scrollToBottom();
    }, [messages.length]);

    useEffect(() => {
        if (!user?.id) return;

        (async () => {
            let id = chatIdFromRoute;
            if (!id) {
                id = await createNewChat(user.id);
                setChatId(id);
            }

            const rows = await fetchMessages(id);
            setMessages(
                rows.map((r) => ({
                    id: r.id,
                    text: r.content,
                    isUser: r.sender === "user",
                    created_at: r.created_at,
                }))
            );

            unsubRef.current?.();
            unsubRef.current = subscribeMessages(id, (row) => {
                const clientId = row?.metadata?.client_id;

                setMessages((prev) => {
                    if (row.id && prev.some((m) => m.id === row.id)) return prev;

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

                if (row.sender === "assistant") setTyping(false);
            });
        })();

        return () => unsubRef.current?.();
    }, [user?.id, chatIdFromRoute]);

    const handleSend = async (userText) => {
        if (!chatId || !user?.id) return;

        const clientId = crypto.randomUUID();
        setMessages((prev) => [
            ...prev,
            {text: userText, isUser: true, pending: true, clientId},
        ]);

        try {
            await sendUserMessage(chatId, userText, clientId);
        } catch (e) {
            setMessages((prev) =>
                prev.map((m) =>
                    m.pending && m.clientId === clientId ? {...m, error: true} : m
                )
            );
            return;
        }

        setTyping(true);
        try {
            await callAI(chatId, userText);
        } catch (e) {
            console.error("AI error", e);
            setTyping(false);
            setMessages((prev) => [
                ...prev,
                {text: "No pude obtener respuesta del asistente.", isUser: false},
            ]);
        }
    };

    const messagesToShow = messages.length
        ? messages
        : [{text: "Hola, ¿en qué puedo ayudarte?", isUser: false}];

    return (
        <Chat>
            <Chat__messagesComponent
                messages={messagesToShow}
                bottomRef={bottomRef}
                typing={typing}
            />
            <Chat__inputComponent onSend={handleSend}/>
        </Chat>
    );
};
