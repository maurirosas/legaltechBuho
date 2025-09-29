import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  top: 70px;
  right: 70px;
  background: #dbd9d9;
  color: #808080;
  border-radius: 12%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
  width: 255px;
`;
export const Dropdown__list = styled.li`
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
`;
export const Dropdown__item = styled.ul`
    cursor: pointer;

    &:hover {
    }
`;
