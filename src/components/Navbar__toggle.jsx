import React from "react";
import {
  Navbar__toggle,
  Toggle__img,
  SidebarToggle,
} from "../styles/Navbar.styled";

import sideBar from "../assets/side-bar.svg";

export const Navbar__toggleComponent = ({
  handleSidebarToggle,
  isSidebarOpen,
}) => {
  return (
    <Navbar__toggle>
      {!isSidebarOpen && (
        <SidebarToggle onClick={handleSidebarToggle}>
          <Toggle__img src={sideBar} alt="side-bar" />
        </SidebarToggle>
      )}
    </Navbar__toggle>
  );
};
