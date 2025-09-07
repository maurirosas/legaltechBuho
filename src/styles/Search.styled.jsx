import styled from "styled-components";

export const Search = styled.div`
  background: #d9d9d9;
  display: flex;
  align-items: center;
  border: 0.5px solid #d5d5d5;
  border-radius: 18px;
  padding: 5px;
`;

export const Search__input = styled.input`
  border: none;

  outline: none;
  padding: 8px;
  flex: 1;
  font-size: 16px;
  background-color: transparent;
  color: #2c2c2c;
`;

export const Search__button = styled.button`
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        color: #FFFFF;
        font-size: 18px;
    }

    &:hover svg {
        color: black;
    }
`;
