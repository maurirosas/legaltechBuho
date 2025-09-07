import React, {forwardRef, useContext} from "react";
import {Dropdown, Dropdown__item, Dropdown__list,} from "../styles/Dropdown.styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faRightFromBracket, faUser,} from "@fortawesome/free-solid-svg-icons";
import {AuthContext} from "../context/AuthContext";

export const DropdownComponent = forwardRef((props, ref) => {
    const {loginWithGoogle, logout, user} = useContext(AuthContext);

    return (
        <Dropdown ref={ref}>
            {user ? (
                <Dropdown__list>
                    <Dropdown__item>
                        <FontAwesomeIcon icon={faUser} style={{color: "#808080"}}/>{" "}
                        {user?.name && (
                            <span style={{marginLeft: "0.5rem"}}>{user.name}</span>
                        )}
                    </Dropdown__item>

                    <Dropdown__item>
                        <FontAwesomeIcon icon={faGear} style={{color: "#808080"}}/>{" "}
                        Ajustes
                    </Dropdown__item>

                    <Dropdown__item>
                        <a onClick={logout}>
                            <FontAwesomeIcon
                                icon={faRightFromBracket}
                                style={{color: "#808080"}}
                            />
                            Cerrar sesión
                        </a>
                    </Dropdown__item>
                </Dropdown__list>
            ) : (
                <Dropdown__list>
                    <Dropdown__item>
                        <a
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                console.log("CLICK DETECTADO");
                                console.log("loginWithGoogle:", loginWithGoogle);
                                loginWithGoogle();
                            }}
                        >
                            <FontAwesomeIcon icon={faUser} style={{color: "#808080"}}/>{" "}
                            Iniciar sesión
                        </a>
                    </Dropdown__item>
                </Dropdown__list>
            )}
        </Dropdown>
    );
});
