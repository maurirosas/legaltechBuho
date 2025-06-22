import React from "react";
import { Chat__messageComponent } from "./Chat__message";
import { Chat__messages } from "../../styles/Chat.styled";

export const Chat__messagesComponent = ({ messages }) => {
  return (
    <Chat__messages>
      {messages.map((msg, idx) => (
        <Chat__messageComponent key={idx} text={msg.text} isUser={msg.isUser} />
      ))}
    </Chat__messages>
  );
};
