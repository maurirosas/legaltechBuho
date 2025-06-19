import React from "react";
import styled from "styled-components";

const ChatHistorial__item = styled.div`
  background-color: rgb(53, 154, 151);
  padding: 0.75rem;
  border-radius: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2b7a78;
  }
`;

export const ChatHistoryItem = ({ title, onClick }) => {
  return <ChatHistorial__item onClick={onClick}>{title}</ChatHistorial__item>;
};
