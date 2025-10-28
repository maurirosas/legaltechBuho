import styled from "styled-components";

const SideBar = styled.div`
  width: ${(props) => (props.$isOpen ? "380px" : "0px")};
  background-color: #1d1d1d;
  color: #ecf0f1;
  padding: ${({ $isOpen }) => ($isOpen ? "1.2rem" : "0")};
  box-shadow: ${({ $isOpen }) =>
      $isOpen ? "2px 0 5px rgba(0, 0, 0, 0.1)" : "none"};
  overflow: hidden;
  transition: width 0.3s ease-in-out, padding 0.3s ease-in-out;
  z-index: 1000;
  border-top-left-radius: 30px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 30px;
  margin: 0rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 1279px) {
    width: ${(props) => (props.$isOpen ? "215px" : "0px")};

  }
  @media (max-width: 769px) {
    width: ${(props) => (props.$isOpen ? "150px" : "0px")};
    padding: ${({ $isOpen }) => ($isOpen ? "1.2rem 0.8rem" : "0")};
  }
  @media (max-width: 480px) {
    width: ${(props) => (props.$isOpen ? "135px" : "0px")};
    padding: ${({ $isOpen }) => ($isOpen ? "0.8rem 0.6rem" : "0")};
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    
  }
  
`;

const SideBar__buttons = styled.div`
  height: 4rem;
  justify-content: start;
  text-align: right;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  @media (max-width: 480px) {
    margin:-10px;
  }
`;
const SideBar__buttonAdd = styled.a`
  text-decoration: none;
  font-size: 24px;
  cursor: pointer;

  background-color: #2A2F38;
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

const ChatHistorial__container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ChatHistorial__titulo = styled.label`
@media (max-width: 1279px) {
    font-size: 0.8rem;
  }
  @media (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

const Pro__container = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  margin-bottom: 11px;
  padding-top: 34px;
  align-items: center;
  border-top: 1px solid #D1D1D1;
  gap: 5px;
  @media (max-width: 769px) {
    padding-top: 37px;
    margin-bottom: 12px;
  }
  @media (max-width: 480px) {
    padding-top: 23px;
    margin-bottom: 12px;
  }
`;

const settings__container = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  margin-bottom: 0rem;
  align-items: center;
`;


const Pro__button = styled.label`
  background-color: #ffffffff;
  padding: 4px 6px;
  border-radius: 50%;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #fff;
  font-size: 16px;
  @media (max-width: 769px) {
    font-size: 12px;
    padding: 3px 5px;
  }
`;
const SideBar__title = styled.h1`
  font-size:51px;
  font-family: serif;
  margin-left:-20px;

  @media (max-width: 1279px) {
    font-size:32px;
    margin-left:-15px;
  }
  @media (max-width: 480px) {
    margin-left:-10px;
    font-size: 21px;
    
  }
`;
const Span__nombre = styled.span`
  margin: 0 0.5rem 0 0.5rem;

  @media (max-width: 1279px) {
    font-size: 0.8rem;
  }

  @media (max-width: 769px) {
    font-size: 0.6rem;
    margin: 0 0rem 0 0rem;
  }
`;
export {
  SideBar,
  SideBar__title,
  SideBar__buttons,
  SideBar__buttonAdd,
  ChatHistorial__container,
  ChatHistorial__titulo,
  Pro__container,
  Pro__button,
  Span__nombre
};
