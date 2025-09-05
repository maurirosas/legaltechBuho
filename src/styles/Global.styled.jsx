import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background: #e3e3e3;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    
    }`;

const MainContentWrapper = styled.div`
  flex-grow: 1;
  transition: margin-left 0.3s ease-in-out;
  width: 75%;
`;

export { GlobalStyle, MainContentWrapper };
