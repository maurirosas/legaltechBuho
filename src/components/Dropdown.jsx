import React, { forwardRef } from "react";
import {
  Dropdown,
  Dropdown__list,
  Dropdown__item,
} from "../styles/Dropdown.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const DropdownComponent = forwardRef((props, ref) => {
  return (
    <Dropdown ref={ref}>
      <Dropdown__list>
        <Dropdown__item>
          <FontAwesomeIcon icon={faUser} style={{ color: "#808080" }} /> Perfil
        </Dropdown__item>
        <Dropdown__item>
          <FontAwesomeIcon icon={faGear} style={{ color: "#808080" }} /> Ajustes
        </Dropdown__item>
        <Dropdown__item>
          <FontAwesomeIcon
            icon={faRightFromBracket}
            style={{ color: "#808080" }}
          />
          Cerrar Sesion
        </Dropdown__item>
      </Dropdown__list>
    </Dropdown>
  );
});
