import styled from "styled-components";

export const Logo = styled.div`
  img {
    width: ${({ size }) =>
      size === "small"
        ? "4rem"
        : size === "large"
        ? "6rem"
        : "100px"}; // tamaño por defecto: medium = 100px
  }
`;
