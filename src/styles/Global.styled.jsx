import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        background: #FDFBF7;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        min-height: 100vh;
    }`;

const MainContentWrapper = styled.div`
    flex-grow: 1;
    margin-left: ${({ $isOpen }) => ($isOpen ? '280px' : '56px')};
    width: ${({ $isOpen }) => ($isOpen ? 'calc(100% - 280px)' : 'calc(100% - 56px)')};
    min-height: 100vh;
    transition: all 0.25s ease;
    background: #FDFBF7;
`;

export { GlobalStyle, MainContentWrapper };

