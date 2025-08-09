import styled, { keyframes, css } from "styled-components";

/* === Keyframes primero === */
const messageIn = keyframes`
  from { opacity: 0; transform: translateY(6px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const blink = keyframes`
  0%, 80%, 100% { opacity: 0.2; }
  40% { opacity: 1; }
`;

/* === Layout contenedores === */
const ChatComponentWrapper = styled.div`
  flex-grow: 1;
  transition: all 0.3s ease; /* opcional, para animaciones suaves */
`;

const ChatContainer = styled.div`
  display: flex;
  overflow: hidden; /* Evita scrolls indeseados */
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

const Chat = styled.div`
  margin: 0 1rem;
  border-radius: 45px;
  padding: 3rem 10%;
  height: 77vh;
  width: auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  /* Si tienes padres flex, esto ayuda al scroll interno */
  min-height: 0;
`;

const Chat__messages = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
  min-height: 0; /* evita que crezca infinito */
`;

/* === Burbujas === */
const Chat__messageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isUser ? "end" : "flex-start")};
  flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
  margin: 10px 0;
  animation: ${messageIn} 160ms ease-out both;
`;

const Chat__message = styled.div`
  max-width: 70%;
  padding: 1.2rem 2rem;
  border-radius: 56px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.$isUser ? "#ECECEC" : "#FFFFFF")};
  color: #000000;
  font-size: 18px;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

/* === Input === */
const ChatInputWrapper = styled.div`
  display: flex;
  align-items: flex-end; /* para alinear el botón abajo */
  padding: 8px 12px;
  border-radius: 30px;
  background-color: #e8e8e8;
  margin: 0 12px;
  gap: 8px; /* separa textarea y botón */
`;

const ChatInputField = styled.textarea`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  line-height: 1.4;
  padding: 12px 0; /* padding vertical dentro del wrapper */
  color: rgba(0, 0, 0, 0.84);

  /* autogrow */
  resize: none;              /* el usuario no “agarra” el borde */
  overflow-y: auto;          /* aparece scroll si supera el max */
  max-height: 30vh;          /* límite de crecimiento */
  min-height: 24px;          /* 1 línea aprox */
  white-space: pre-wrap;
  word-break: break-word;
`;

const ChatInputButton = styled.button`
  background-color: #3aafa9;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: white;
    font-size: 16px;
  }

  &:hover {
    background-color: #319e9b;
  }
`;

/* === Indicador "escribiendo..." === */
export const TypingBubble = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  background: #fff;
  color: #444;
  border-radius: 16px;
  padding: 8px 12px;
  box-shadow: 0 1px 1px rgba(0,0,0,0.06);

  span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: currentColor;
    animation: ${blink} 1100ms infinite;
  }
  span:nth-child(2) { animation-delay: 150ms; }
  span:nth-child(3) { animation-delay: 300ms; }
`;

export {
  ChatComponentWrapper,
  ChatContainer,
  Chat,
  Chat__messageWrapper,
  Chat__messages,
  Chat__message,
  ChatInputWrapper,
  ChatInputField,
  ChatInputButton,
};
