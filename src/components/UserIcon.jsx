import React from "react";
import { UserIcon, UserIcon__image } from "../styles/Navbar.styled";
import userImage from "../assets/users/pet.png";

export const UserIconComponent = ({ onClick }) => {
  return (
    <UserIcon onClick={onClick}>
      <UserIcon__image src={userImage} alt="Usuario" />
    </UserIcon>
  );
};
