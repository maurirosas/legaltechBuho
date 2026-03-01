import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  right: 70px;
  background: #dbd9d9e8;
  color: #808080;
  border-radius: 12%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 255px;
  @media (max-width: 480px) {
    top: 59px;
    right: 16px;
    width: 245px;
    border-radius: 15px;
  }
`;
export const Dropdown__list = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  @media (max-width: 480px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;
export const Dropdown__item = styled.ul`
    cursor: pointer;
    padding: 10px 20px;
    &:hover {
    }
    @media (max-width: 480px) {
      margin: 0.25rem 0;
      padding: 5px 10px 5px 20px;
    }
`;
