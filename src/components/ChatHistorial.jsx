import React from "react";
import styled from "styled-components";

const ChatHistorial__item = styled.div`
  background-color: rgb(53, 154, 151);
  padding: 0.4rem 0.75rem;
  height: 2rem;
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
    background-color: #2b7a78;
  }
`;


export const ChatHistoryItem = ({ title, onClick }) => {
  return <ChatHistorial__item onClick={onClick}>{title}</ChatHistorial__item>;
};
