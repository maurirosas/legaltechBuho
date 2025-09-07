import React from "react";
import ReactMarkdown from "react-markdown";
import {Chat__message, Chat__messageWrapper} from "../../styles/Chat.styled";
import {Logo__imgComponent} from "../Logo";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export const Chat__messageComponent = ({text, isUser}) => {
    return (
        <Chat__messageWrapper $isUser={isUser}>
            {isUser ? (
                <FontAwesomeIcon
                    icon={faUser}
                    style={{color: "#000000", margin: "0 10px", fontSize: "1.8rem"}}
                />
            ) : (
                <Logo__imgComponent size="small" color="black"/>
            )}
            <Chat__message $isUser={isUser}>
                <ReactMarkdown>{text}</ReactMarkdown>
            </Chat__message>
        </Chat__messageWrapper>
    );
};
