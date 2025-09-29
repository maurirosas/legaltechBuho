import styled from "styled-components";

export const Logo = styled.div`
    img {
        width: ${({size}) =>
                size === "small"
                        ? "3rem"
                        : size === "large"
                                ? "6rem"
                                : "100px"};
    }
    background: #1D1D1D;
    border-radius: 50%;
`;
