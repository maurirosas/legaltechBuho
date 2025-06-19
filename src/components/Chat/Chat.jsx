import React from "react";
import { Chat } from "../../styles/Chat.styled";
import { Chat__messagesComponent } from "./Chat__messages";
import { Chat__inputComponent } from "./Chat__input";

export const ChatComponent = () => {
  return (
    <Chat>
      <Chat__messagesComponent />
      <Chat__inputComponent />
    </Chat>
  );
};
