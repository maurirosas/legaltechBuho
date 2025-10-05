import React from "react";
import styled from "styled-components";

const ChatHistorial__item = styled.div`
  background-color: ${(props) => (props.$isActive ? "#2A2F38;" : "#2a2f381f;")}; // Color cuando está activo
  padding: 0.8rem 0.75rem;
  align-items: center;
  line-height: 1.25rem;
  font-size: 0.9rem;
  border-radius: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
  transition: background-color 0.2s;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background-color: #2A2F38;
  }
    @media (max-width: 1279px) {
    font-size: 0.8rem;
  }
    @media (max-width: 480px) {
    font-size: 0.6rem;
    padding: 0.5rem 0.4rem;
  }
`;


export const ChatHistoryItem = ({ title, onClick, isActive }) => {
  return <ChatHistorial__item 
          onClick={onClick}
          $isActive={isActive} // Pasa el estado activo a los estilos
        >
            {title}
          </ChatHistorial__item>;
};
