import styled, { keyframes, css } from "styled-components";
import chatBg from '../assets/background_images/FONDO CHAT.png';

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

const glowMove = keyframes`
    0% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 200% 50%;
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
    margin: 0;
    padding: 0 0 120px 0;
    min-height: 100vh;
    width: 100%;
    background-color: #FDFBF7;
    background-image: url(${chatBg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
`;

const WelcomeSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    gap: 2rem; // Adjusted gap
    max-width: 900px;
    margin: 0 auto;
    width: 100%;
`;

const WelcomeTitle = styled.h1`
    font-family: 'Harvey Serif', Georgia, serif;
    font-size: 3.5rem; // Adjusted font size
    font-weight: 400;
    text-align: center;
    color: #1a1a1a;
    line-height: 1.2;
    margin: 0;
    
    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const WelcomeSubtitle = styled.h2`
    font-family: 'HarveySansDiatypeVariable-Regular', sans-serif;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
    color: #333;
    line-height: 1.3;
    margin: -1rem 0 0 0;
`;

const CategoryChipsContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 0.5rem;
`;

const CategoryChip = styled.button`
    background: transparent;
    border: 1px solid #E06532;
    border-radius: 12px;
    padding: 0.6rem 1.5rem;
    font-size: 0.9rem;
    color: #000;
    cursor: pointer;
    transition: all 0.2s ease;
    font-weight: 400;
    font-family: 'Gontserrat', sans-serif;
    
    &:hover {
        background: rgba(224, 101, 50, 0.15);
        transform: translateY(-2px);
    }
    
    &:active {
        transform: translateY(0);
    }
`;

const Chat__messages = styled.div`
    margin: 0 auto;
    padding: 2rem 1.5rem;
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    flex: 1;
`;

const Chat__messageWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    align-self: ${({ $isUser }) => ($isUser ? "flex-end" : "flex-start")};
    flex-direction: ${({ $isUser }) => ($isUser ? "row-reverse" : "row")};
    max-width: 90%;
    margin: 1.5rem 0;
    animation: ${messageIn} 160ms ease-out both;
    gap: 0.75rem;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const Chat__message = styled.div`
    max-width: ${(props) => (props.$isUser ? "60%" : "85%")};
    padding: ${(props) => (props.$isUser ? "0.875rem 1.25rem" : "0")};
    border-radius: ${(props) => (props.$isUser ? "20px" : "0")};
    box-shadow: ${(props) => (props.$isUser ? "0 1px 3px rgba(0, 0, 0, 0.08)" : "none")};
    background-color: ${(props) => (props.$isUser ? "#E8E0D5" : "transparent")};
    color: #1a1a1a;
    font-size: 18px;
    line-height: 1.7;
    word-wrap: break-word;
    overflow-wrap: break-word;
    font-family: 'Gontserrat', sans-serif;
    
    p {
        margin: 0.5rem 0;
        
        &:first-child {
            margin-top: 0;
        }
        
        &:last-child {
            margin-bottom: 0;
        }
    }
    
    h1, h2, h3, h4, h5, h6 {
        font-weight: 600;
        margin: 1.25rem 0 0.5rem;
        
        &:first-child {
            margin-top: 0;
        }
    }
    
    ul, ol {
        margin: 0.5rem 0;
        padding-left: 1.5rem;
    }
    
    li {
        margin: 0.25rem 0;
    }
    
    code {
        background: rgba(0, 0, 0, 0.05);
        padding: 0.2rem 0.4rem;
        border-radius: 4px;
        font-size: 0.9em;
    }
    
    pre {
        background: rgba(0, 0, 0, 0.05);
        padding: 1rem;
        border-radius: 8px;
        overflow-x: auto;
        
        code {
            background: none;
            padding: 0;
        }
    }
`;

const ChatInputContainer = styled.div`
    width: 100%;
    padding: 1rem 3rem 2rem;
    background: transparent;
    z-index: 100;
    
    ${({ $isFixed }) => $isFixed && `
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    `}
`;

const rotateBorder = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const ChatInputWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    padding: 0.5rem 0.5rem 0.5rem 1.5rem;
    border-radius: 12px;
    background-color: #FFFFFF;
    border: 1px solid #E0E0E0;
    margin: 0 auto;
    gap: 12px;
    max-width: 900px;
    width: calc(100% - 6rem);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.2s ease;
    flex-shrink: 0;
    position: relative;
    
    &:focus-within {
        border-color: #B0C4DE;
        box-shadow: 0 4px 20px rgba(70, 130, 180, 0.15);
    }

    ${({ $showLines }) => $showLines && css`
        border: none;
        
        &::before {
            content: '';
            position: absolute;
            top: -2px;
            left: -2px;
            right: -2px;
            bottom: -2px;
            border-radius: 14px;
            background: linear-gradient(90deg, #fff, #fff, #F08A5D, #fff, #fff);
            background-size: 300% 100%;
            animation: ${rotateBorder} 4s linear infinite;
            z-index: -1;
        }
        
        &::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 12px;
            background: #FFFFFF;
            z-index: -1;
        }
    `}
`;

const ChatInputField = styled.textarea`
    flex: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    line-height: 1.5;
    padding: 0.5rem 0;
    color: #1a1a1a;
    resize: none;
    overflow-y: auto;
    max-height: 200px;
    min-height: 24px;
    white-space: pre-wrap;
    word-break: break-word;
    font-family: 'Gontserrat', sans-serif;
    
    &::placeholder {
        color: #999;
    }
    
    &::-webkit-scrollbar {
        width: 6px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(0, 0, 0, 0.2);
        border-radius: 3px;
    }
`;

const ChatInputButton = styled.button`
    background-color: #F08A5D;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: all 0.2s ease;

    svg {
        color: #fff;
        font-size: 16px;
    }

    &:hover {
        background-color: #E06532;
        transform: scale(1.1) rotate(-8deg);
    }
    
    &:active {
        transform: scale(0.95);
    }
`;

export const TypingBubble = styled.div`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #fff;
    color: #666;
    border-radius: 16px;
    padding: 0.75rem 1rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
    margin-left: 3.5rem;

    span {
        width: 8px;
        height: 8px;
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

const ChatOptionButton = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: transparent;
    border: none;
    color: #666;
    font-size: 0.8rem;
    cursor: pointer;
    margin-top: 0.5rem;
    padding: 0.4rem 0.8rem;
    border-radius: 4px;
    transition: all 0.2s;
    font-family: 'Gontserrat', sans-serif;
    font-weight: 500;

    &:hover {
        background: rgba(0, 0, 0, 0.05);
        color: #333;
    }

    svg {
        font-size: 1rem;
    }
`;

export {
    ChatComponentWrapper,
    ChatContainer,
    Chat,
    WelcomeSection,
    WelcomeTitle,
    WelcomeSubtitle,
    CategoryChipsContainer,
    CategoryChip,
    Chat__messageWrapper,
    Chat__messages,
    Chat__message,
    ChatInputContainer,
    ChatInputWrapper,
    ChatInputField,
    ChatInputButton,
    ChatOptionButton,
};