import React, {useContext, useEffect, useRef, useState} from "react";
import {SearchComponent} from "./Search";
import {Navbar__toggleComponent} from "./Navbar__toggle";
import {UserIconComponent} from "./UserIcon";
import {DropdownComponent} from "./Dropdown";
import {AuthContext} from "../context/AuthContext";

import {NavbarWrapper,} from "../styles/Navbar.styled";

export const Navbar = ({isOpen, handleSidebarToggle, activeChatTitle}) => {
    const {user} = useContext(AuthContext);
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
            <span style={{ 
                flexGrow: 1, // Esto hace que el título ocupe el espacio central
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'rgba(0, 0, 0, 0.54)', 
                textAlign: 'center' // Centra el texto en el espacio disponible
            }}>
                {activeChatTitle}
            </span>

            <UserIconComponent onClick={() => setOpenProfile((prev) => !prev)}/>

            {openProfile && (
                <DropdownComponent ref={dropdownRef}/>
            )}
        </NavbarWrapper>
    );
};
