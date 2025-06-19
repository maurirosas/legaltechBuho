import React, { useState, useRef, useEffect } from "react";
import { SearchComponent } from "./Search";
import { Navbar__toggleComponent } from "./Navbar__toggle";
import { UserIconComponent } from "./UserIcon";
import { DropdownComponent } from "./Dropdown";

import {
  NavbarWrapper,
  NavLinkWrapper,
  StyledNavLink,
} from "../styles/Navbar.styled";

export const Navbar = ({ isOpen, handleSidebarToggle }) => {
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenProfile(false);
      }
    };

    if (openProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openProfile]);

  return (
    <NavbarWrapper>
      <Navbar__toggleComponent
        handleSidebarToggle={handleSidebarToggle}
        isOpen={isOpen}
      />
      <SearchComponent />
      <UserIconComponent onClick={() => setOpenProfile((prev) => !prev)} />
      {openProfile && <DropdownComponent ref={dropdownRef} />}
    </NavbarWrapper>
  );
};
