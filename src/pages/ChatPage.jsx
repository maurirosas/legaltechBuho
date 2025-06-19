import React from "react";

import { ChatComponent } from "../components/Chat/Chat";
import { SideBarComponent } from "../components/SideBar"; // si ya lo tenés hecho
import { ChatContainer, ChatComponentWrapper } from "../styles/Chat.styled"; // o donde sea que lo tengas
import { useOutletContext } from "react-router-dom";

export const ChatPage = () => {
  const { isSidebarOpen } = useOutletContext();

  return (
    <ChatContainer>
      <ChatComponentWrapper>
        <ChatComponent />
      </ChatComponentWrapper>
    </ChatContainer>
  );
};
