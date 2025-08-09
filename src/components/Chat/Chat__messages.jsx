// src/components/Chat/Chat__messages.jsx
import React from "react";
import { Chat__messageComponent } from "./Chat__message";
import { Chat__messages } from "../../styles/Chat.styled";

export const Chat__messagesComponent = ({ messages, bottomRef }) => {
  return (
    <Chat__messages>
      {messages.map((msg, idx) => (
        <Chat__messageComponent key={msg.id ?? msg.clientId ?? idx}  text={msg.text} isUser={msg.isUser} />
      ))}
      {/* 👇 ancla para scroll automático */}
      <div ref={bottomRef} />
    </Chat__messages>
  );
};
