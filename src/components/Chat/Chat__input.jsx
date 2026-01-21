import React, { useEffect, useRef, useState } from "react";
import { ChatInputButton, ChatInputContainer, ChatInputField, ChatInputWrapper, } from "../../styles/Chat.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export const Chat__inputComponent = ({ onSend, isFixed = false, showLines = false }) => {
    const [input, setInput] = useState("");
    const taRef = useRef(null);

    const autosize = () => {
        const el = taRef.current;
        if (!el) return;
        el.style.height = "auto";
        el.style.height = `${el.scrollHeight}px`;
    };

    useEffect(() => {
        autosize();
    }, []);

    const handleChange = (e) => {
        setInput(e.target.value);
        requestAnimationFrame(autosize);
    };

    const handleSubmit = () => {
        const value = input.trim();
        if (!value) return;
        onSend(value);
        setInput("");
        requestAnimationFrame(() => {
            const el = taRef.current;
            if (el) el.style.height = "auto";
        });
    };

    const onKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    };

    return (
        <ChatInputContainer $isFixed={isFixed}>
            <ChatInputWrapper $showLines={showLines}>
                <ChatInputField
                    ref={taRef}
                    rows={1}
                    placeholder="Haz tu consulta jurídica..."
                    value={input}
                    onChange={handleChange}
                    onKeyDown={onKeyDown}
                />
                {input.trim() && (
                    <ChatInputButton onClick={handleSubmit} title="Enviar">
                        <FontAwesomeIcon icon={faArrowUp} />
                    </ChatInputButton>
                )}
            </ChatInputWrapper>
        </ChatInputContainer>
    );
};
