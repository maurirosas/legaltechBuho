import styled, {keyframes} from "styled-components";

const messageIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(6px) scale(0.98);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
`;

const blink = keyframes`
    0%, 80%, 100% {
        opacity: 0.2;
    }
    40% {
        opacity: 1;
    }
`;

const ChatComponentWrapper = styled.div`
    flex-grow: 1;
    transition: all 0.3s ease;
`;

const ChatContainer = styled.div`
    display: flex;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    width: 100%;
`;

const Chat = styled.div`
    border-radius: 45px;
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;

    border-bottom-right-radius: 45px;
    border-top-right-radius: 45px;
    
    height: calc(100vh - 5vh - 1rem - 16px);
    width: 100%;
    background: #f7f7f7;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    min-height: 0;
`;

const Chat__messages = styled.div`
    margin: 0;
    
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    min-height: 0;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
    background: #F9F6F1;
`;

const Chat__messageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: ${(props) => (props.$isUser ? "end" : "flex-start")};
    flex-direction: ${(props) => (props.$isUser ? "row-reverse" : "row")};
    margin: 10px 0;
    animation: ${messageIn} 160ms ease-out both;
    padding: 0rem 1rem 0px 2rem;
    gap: 8px;
`;

const Chat__message = styled.div`
    max-width: 70%;
    padding: 0.2rem 1rem;
    border-radius: 21px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    background-color: ${(props) => (props.$isUser ? "#ECECEC" : "#FFFFFF")};
    color: #000000;
    font-size: 18px;
    word-wrap: break-word;
    overflow-wrap: break-word;
    font-size: 1rem;
`;

const ChatInputWrapper = styled.div`
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;
    height: 91px;
    border-top: 1px solid #dbdbdbff;
    width: 100%;
    background: #FFFFFF;
`;

const ChatInputField = styled.textarea`
    width:67%;
    border: none;
    outline: none;
    background: #E8E8E8;
    font-size: 16px;
    line-height: 1.4;
    padding: 13px 18px;
    color: rgba(0, 0, 0, 0.54);
    resize: none;
    overflow-y: auto;
    max-height: 24px;
    min-height: 8px;
    white-space: pre-wrap;
    word-break: break-word;
    border-radius: 14px;
    scrollbar-width: none;
`;

const ChatInputButton = styled.button`
    background-color: #1D1D1D;
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
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

export const TypingBubble = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #fff;
    color: #444;
    border-radius: 16px;
    padding: 8px 12px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.06);

    span {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: currentColor;
        animation: ${blink} 1100ms infinite;
    }

    span:nth-child(2) {
        animation-delay: 150ms;
    }

    span:nth-child(3) {
        animation-delay: 300ms;
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
};
