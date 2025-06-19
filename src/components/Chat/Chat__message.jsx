import React from "react";
import { Chat__messageWrapper, Chat__message } from "../../styles/Chat.styled";
import { Logo__imgComponent } from "../Logo"; // Reutilizas el LogoComponent
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export const Chat__messageComponent = ({ text, isUser }) => {
  return (
    <Chat__messageWrapper $isUser={isUser}>
      {isUser ? (
        <FontAwesomeIcon
          icon={faUser}
          style={{ color: "#000000", margin: "0 10px", fontSize: "1.8rem" }}
        />
      ) : (
        <Logo__imgComponent size="small" color="black" />
      )}
      <Chat__message $isUser={isUser}>{text}</Chat__message>
    </Chat__messageWrapper>
  );
};
