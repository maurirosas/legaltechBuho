import styled from "styled-components";

const ChatComponentWrapper = styled.div`
  flex-grow: 1;
  transition: all 0.3s ease; // opcional, para animaciones suaves
`;

const ChatContainer = styled.div`
  display: flex;
  overflow: hidden; // Evita scrolls indeseados
  transition: all 0.3s ease-in-out;
  width: 100%;
`;

const Chat = styled.div`
  margin: 0 1rem;
  border-radius: 45px;
  padding: 3rem 10%;
  height: 77vh;
  width: Auto;
  background: #f7f7f7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
`;
const Chat__messages = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

const Chat__messageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$isUser ? "end" : "flex-start")};
  flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
  margin: 10px 0;
`;

const Chat__message = styled.div`
  max-width: 70%;
  padding: 1.2rem 2rem;
  border-radius: 56px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.$isUser ? "#ECECEC" : "#FFFFFF")};

  color: #000000;
  font-size: 18px;
`;

const ChatInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 30px;
  background-color: #e8e8e8;
  margin: 0 12px;
`;

const ChatInputField = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-size: 16px;
  padding: 12px;
  color: rgba(0, 0, 0, 0.54);
`;

const ChatInputButton = styled.button`
  background-color: #3aafa9;
  border: none;
  border-radius: 50%;
  padding: 10px;
  margin-left: 8px;
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
}; // Export the styled components
