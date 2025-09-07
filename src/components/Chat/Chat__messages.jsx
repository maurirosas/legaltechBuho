import React from "react";
import {Chat__messageComponent} from "./Chat__message";
import {Chat__messages, TypingBubble} from "../../styles/Chat.styled";

export const Chat__messagesComponent = ({messages, bottomRef, typing}) => {
    return (
        <Chat__messages>
            {messages.map((msg, idx) => (
                <Chat__messageComponent key={msg.id ?? msg.clientId ?? idx} text={msg.text} isUser={msg.isUser}/>
            ))}
            {typing && (
                <div style={{display: "flex", margin: "8px 0"}}>
                    <TypingBubble>
                        <span/> <span/> <span/>
                    </TypingBubble>
                </div>
            )}
            {}
            <div ref={bottomRef}/>
        </Chat__messages>
    );
};
