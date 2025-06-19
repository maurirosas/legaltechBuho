import React from "react";
import {
  SideBar,
  SideBar__buttons,
  SideBar__buttonAdd,
  ChatHistorial__titulo,
  ChatHistorial__container,
  Pro__container,
  Pro__button,
  SideBar__title,
} from "../styles/SideBar.styled";
import { ChatHistoryItem } from "./ChatHistorial"; // Asegúrate de que la ruta sea correcta
import { SearchComponent } from "./Search";
import { Logo__imgComponent } from "./Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentMedical } from "@fortawesome/free-solid-svg-icons";
import sideBar from "../assets/side-bar.svg";

export const SideBarComponent = ({ isOpen, handleSidebarToggle }) => {
  return (
    <SideBar $isOpen={isOpen}>
      <SideBar__buttons>
        {/*<SideBar__buttonAdd>
          <FontAwesomeIcon
            icon={faCommentMedical}
            style={{ color: "#ffffff" }}
          />
        </SideBar__buttonAdd>
        */}
        <Logo__imgComponent size="large" color="white" />
        <SideBar__title>BUHO</SideBar__title>
      </SideBar__buttons>

      <SearchComponent />

      <ChatHistorial__container>
        <ChatHistorial__titulo>Semana pasada</ChatHistorial__titulo>
        <ChatHistoryItem title="Resumen de Artículo N° X" />
        <ChatHistoryItem title="Introduccion a la constitucion N.." />
      </ChatHistorial__container>

      <Pro__container>
        <Pro__button>Mejora tu plan</Pro__button>
      </Pro__container>
    </SideBar>
  );
};
