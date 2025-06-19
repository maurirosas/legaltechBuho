import React from "react";
import { Logo } from "../styles/Logo.styled";
import logoBlack from "../assets/logo-black.png";
import logoWhite from "../assets/logo-white.png";

export const Logo__imgComponent = ({ size = "medium", color = "black" }) => {
  const logoSrc = color === "white" ? logoWhite : logoBlack;

  return (
    <Logo size={size}>
      <img src={logoSrc} alt="Logo" />
    </Logo>
  );
};
