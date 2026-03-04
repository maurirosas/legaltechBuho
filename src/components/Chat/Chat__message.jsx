import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Chat__message, Chat__messageWrapper, ChatOptionButton } from "../../styles/Chat.styled";
import { Logo__imgComponent } from "../Logo";
import logoWhite from "../../assets/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCopy, faCheck } from "@fortawesome/free-solid-svg-icons";

export const Chat__messageComponent = ({ text, isUser }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Chat__messageWrapper $isUser={isUser}>
            {isUser ? (
                <FontAwesomeIcon
                    icon={faUser}
                    style={{ color: "#000000", margin: "0 10px", fontSize: "1.8rem" }}
                />
            ) : (
                <div style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    backgroundColor: "#000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    flexShrink: 0,
                    marginRight: "4px"
                }}>
                    <img
                        src={logoWhite}
                        alt="Búho Logo"
                        style={{ width: "65%", height: "65%", objectFit: "contain" }}
                    />
                </div>
            )
            }
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: isUser ? 'flex-end' : 'flex-start', maxWidth: '100%' }}>
                <Chat__message $isUser={isUser}>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </Chat__message>
                {!isUser && (
                    <ChatOptionButton onClick={handleCopy}>
                        <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                        {copied ? "Copiado!" : "Copiar"}
                    </ChatOptionButton>
                )}
            </div>
        </Chat__messageWrapper >
    );
};
