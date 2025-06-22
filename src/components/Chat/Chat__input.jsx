import React, { useState } from "react";
import {
  ChatInputWrapper,
  ChatInputField,
  ChatInputButton,
} from "../../styles/Chat.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Chat__inputComponent = ({ onSend }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.trim()) {
      onSend(input);
      setInput("");
    }
  };

  return (
    <ChatInputWrapper>
      <ChatInputField
        rows="1"
        placeholder="Pregunta lo que quieras"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
      />
      <ChatInputButton onClick={handleSubmit}>
        <FontAwesomeIcon icon={faArrowUp} style={{ color: "#000000" }} />
      </ChatInputButton>
    </ChatInputWrapper>
  );
};
