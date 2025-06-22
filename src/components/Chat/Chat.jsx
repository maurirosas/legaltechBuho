import React, { useState } from "react";
import { Chat } from "../../styles/Chat.styled";
import { Chat__messagesComponent } from "./Chat__messages";
import { Chat__inputComponent } from "./Chat__input";
import { sendMessage } from "../../services/chatService";

export const ChatComponent = () => {
  const [messages, setMessages] = useState([
    { text: "Hola, ¿en qué puedo ayudarte?", isUser: false },
  ]);

  const handleSend = async (userText) => {
    if (!userText.trim()) return;

    const newMessages = [...messages, { text: userText, isUser: true }];
    setMessages(newMessages);

    try {
      const response = await sendMessage(userText);
      const reply = response?.message?.content?.respuesta || "Respuesta no disponible";
      setMessages((prev) => [...prev, { text: reply, isUser: false }]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Ocurrió un error al contactar al asistente.", isUser: false },
      ]);
    }
  };

  return (
    <Chat>
      <Chat__messagesComponent messages={messages} />
      <Chat__inputComponent onSend={handleSend} />
    </Chat>
  );
};
