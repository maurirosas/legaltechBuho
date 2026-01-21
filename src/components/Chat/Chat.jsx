import React, { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Chat, WelcomeSection, WelcomeTitle, WelcomeSubtitle, CategoryChipsContainer, CategoryChip } from "../../styles/Chat.styled";
import { Chat__messagesComponent } from "./Chat__messages";
import { Chat__inputComponent } from "./Chat__input";
import { createNewChat, fetchMessages, sendUserMessage, subscribeMessages } from "../../services/chatService";
import { AuthContext } from "../../context/AuthContext";
import { callAI } from "../../services/ai";

export const ChatComponent = ({ chatId: chatIdFromRoute }) => {
    const { user } = useContext(AuthContext);
    const [chatId, setChatId] = useState(chatIdFromRoute ?? null);
    const [messages, setMessages] = useState([]);
    const [typing, setTyping] = useState(false);
    const unsubRef = useRef(() => {
    });
    const bottomRef = useRef(null);
    const subscriptionReady = useRef(false);
    const pendingMessages = useRef([]);
    let isMounted = true;

    const scrollToBottom = () => {
        if (!bottomRef.current) return;
        requestAnimationFrame(() => {
            bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
        });
    };

    useLayoutEffect(() => {
        scrollToBottom();
    }, [messages.length]);

    useEffect(() => {
        if (!user?.id) {
            setChatId(null);
            setMessages([]);
            setTyping(false);
            if (unsubRef.current) {
                unsubRef.current();
                unsubRef.current = () => {
                };
            }
            subscriptionReady.current = false;
            pendingMessages.current = [];
            return;
        }

        if (!chatIdFromRoute) return;

        if (unsubRef.current) {
            console.log("Cleaning up previous subscription for chatId:", chatId);
            unsubRef.current();
            unsubRef.current = () => {
            };
        }

        isMounted = true;

        (async () => {
            let id = chatIdFromRoute;
            if (!id) {
                id = await createNewChat(user.id);
                if (isMounted) setChatId(id);
            }

            const rows = await fetchMessages(id);
            if (isMounted) {
                setMessages(
                    rows.map((r) => ({
                        id: r.id,
                        text: r.content,
                        isUser: r.sender === "user",
                        created_at: r.created_at,
                    }))
                );
            }

            unsubRef.current = subscribeMessages(id, (row) => {
                console.log("Received insert for chatId:", id, "row:", row);
                if (row.chat_id !== id) {
                    console.warn("Ignoring mismatched row for chatId:", row.chat_id, "current:", id);
                    return;
                }

                if (isMounted) {
                    setMessages((prev) => {
                        if (row.id && prev.some((m) => m.id === row.id)) return prev;

                        const clientId = row?.metadata?.client_id;
                        if (clientId) {
                            const i = prev.findIndex((m) => m.pending && m.clientId === clientId);
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
                }
            });

            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log("Subscription set up and channel connected for chatId:", id);
            subscriptionReady.current = true;

            const recentMessages = await fetchMessages(id, { limit: 10 });
            if (isMounted) {
                setMessages((prev) => {
                    const newMessages = recentMessages
                        .filter((r) => !prev.some((m) => m.id === r.id))
                        .map((r) => ({
                            id: r.id,
                            text: r.content,
                            isUser: r.sender === "user",
                            created_at: r.created_at,
                        }));
                    return [...prev, ...newMessages];
                });
            }

            if (subscriptionReady.current) {
                pendingMessages.current.forEach(({ userText, clientId }) => handleSend(userText, clientId));
                pendingMessages.current = [];
            }
        })();

        return () => {
            isMounted = false;
            if (unsubRef.current) {
                console.log("Unmount cleanup for chatId:", chatId);
                unsubRef.current();
                unsubRef.current = () => {
                };
            }
        };
    }, [user?.id, chatIdFromRoute]);

    const handleSend = async (userText, clientId = crypto.randomUUID()) => {
        if (!chatIdFromRoute || !user?.id) return;

        if (!subscriptionReady.current) {
            pendingMessages.current.push({ userText, clientId });
            console.log("Message enqueued, waiting for subscription:", { userText, clientId });
            return;
        }

        setMessages((prev) => [
            ...prev,
            { text: userText, isUser: true, pending: true, clientId },
        ]);

        try {
            console.log("Sending message to chatId:", chatIdFromRoute);
            await sendUserMessage(chatIdFromRoute, userText, clientId);
        } catch (e) {
            setMessages((prev) =>
                prev.map((m) =>
                    m.pending && m.clientId === clientId ? { ...m, error: true } : m
                )
            );
            return;
        }

        setTyping(true);
        try {
            console.log("Calling AI for chatId:", chatIdFromRoute);
            await callAI(chatIdFromRoute, userText);

            const updateMessages = async () => {
                if (isMounted) {
                    console.log("Forcing update with fetchMessages for chatId:", chatIdFromRoute);
                    const rows = await fetchMessages(chatIdFromRoute);
                    setMessages(
                        rows.map((r) => ({
                            id: r.id,
                            text: r.content,
                            isUser: r.sender === "user",
                            created_at: r.created_at,
                        }))
                    );
                    setTyping(false);
                }
            };
            setTimeout(updateMessages, 2000);
        } catch (e) {
            console.error("AI error", e);
            if (isMounted) {
                setTyping(false);
                setMessages((prev) => [
                    ...prev,
                    { text: "No pude obtener respuesta del asistente.", isUser: false },
                ]);
            }
        }
    };

    const handleCategoryClick = (category) => {
        handleSend(`Ayúdame con ${category}`);
    };

    // Determinar si mostrar la pantalla de bienvenida
    const showWelcome = messages.length === 0;

    return (
        <Chat>
            {showWelcome ? (
                <WelcomeSection>
                    <WelcomeTitle>
                        Bienvenido a BÚHO
                    </WelcomeTitle>
                    {user?.user_metadata?.full_name && <WelcomeSubtitle>Dr. {user.user_metadata.full_name}</WelcomeSubtitle>}

                    <Chat__inputComponent onSend={(userText) => handleSend(userText)} showLines={true} />

                    <CategoryChipsContainer>
                        <CategoryChip onClick={() => handleCategoryClick("Analiza")}>
                            Analiza
                        </CategoryChip>
                        <CategoryChip onClick={() => handleCategoryClick("Jurisprudencia")}>
                            Jurisprudencia
                        </CategoryChip>
                        <CategoryChip onClick={() => handleCategoryClick("Civil")}>
                            Civil
                        </CategoryChip>
                        <CategoryChip onClick={() => handleCategoryClick("Penal")}>
                            Penal
                        </CategoryChip>
                        <CategoryChip onClick={() => handleCategoryClick("Laboral")}>
                            Laboral
                        </CategoryChip>
                    </CategoryChipsContainer>
                </WelcomeSection>
            ) : (
                <>
                    <Chat__messagesComponent
                        messages={messages}
                        bottomRef={bottomRef}
                        typing={typing}
                    />
                    <Chat__inputComponent onSend={(userText) => handleSend(userText)} isFixed={true} />
                </>
            )}
        </Chat>
    );
};