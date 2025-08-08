import React, { useContext } from "react";
import { UserIcon, UserIcon__image } from "../styles/Navbar.styled";
import userImage from "../assets/users/pet.png";
import { AuthContext } from "../context/AuthContext";

export const UserIconComponent = ({ onClick }) => {
  const { user } = useContext(AuthContext);

  const avatarSrc = user?.avatar ?? userImage;

  return (
    <UserIcon onClick={onClick}>
      <UserIcon__image src={avatarSrc} alt="Usuario" />
    </UserIcon>
  );
};
