import React from "react";
import { useParams, useOutletContext } from "react-router-dom";

import { ChatComponent } from "../components/Chat/Chat";
import { ChatComponentWrapper, ChatContainer } from "../styles/Chat.styled";

export const ChatPage = () => {
    const { isSidebarOpen } = useOutletContext();
    const { chatId } = useParams();

    return (
        <ChatContainer>
            <ChatComponentWrapper>
                <ChatComponent chatId={chatId} />
            </ChatComponentWrapper>
        </ChatContainer>
    );
};
