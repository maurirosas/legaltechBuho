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
`;

const SideBar__buttons = styled.div`
  height: 4rem;
  justify-content: start;
  text-align: right;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
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
`;

const ChatHistorial__container = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const ChatHistorial__titulo = styled.label``;

const Pro__container = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
  justify-content: center;
  margin-bottom: 0.8rem;
  padding-top: 1.7rem;
  align-items: center;
  border-top: ridge;
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
  background-color: #2a2f3821;
  padding: 0rem 1rem;
  border-radius: 24px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  transition: background-color 0.2s;
  color: #fff;
  font-size: 16px;
  
`;
const SideBar__title = styled.h1`
  font-size: 31px;
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
};
