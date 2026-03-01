import React from "react";
import {Logo_chat} from "../styles/Logo.styled";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";

export const Logo__imgComponent_chat = ({color = "black"}) => {
    const logoSrc = color === "white" ? logoWhite : logoBlack;

    return (
        <Logo_chat>
            <img src={logoSrc} alt="Logo"/>
        </Logo_chat>
    );
};
