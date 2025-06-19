import React from "react";
import {
  ChatInputWrapper,
  ChatInputField,
  ChatInputButton,
} from "../../styles/Chat.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Chat__inputComponent = () => {
  return (
    <ChatInputWrapper>
      <ChatInputField rows="1" placeholder="Pregunta lo que quieras" />
      <ChatInputButton>
        <FontAwesomeIcon icon={faArrowUp} style={{ color: "#00000" }} />
      </ChatInputButton>
    </ChatInputWrapper>
  );
};
