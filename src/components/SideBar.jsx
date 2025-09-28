import React, {useContext, useEffect, useState} from "react";
import {
    ChatHistorial__container,
    ChatHistorial__titulo,
    Pro__button,
    Pro__container,
    SideBar,
    SideBar__buttonAdd,
    SideBar__buttons,
    SideBar__title,
} from "../styles/SideBar.styled";
import {ChatHistoryItem} from "./ChatHistorial";
import {Logo__imgComponent} from "./Logo";

import {useLocation, useNavigate} from "react-router-dom";
import {createNewChat, getChatsByUser} from "../services/chatService.js";
import {AuthContext} from "../context/AuthContext";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGear, faPlus} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-solid-svg-icons";
export const SideBarComponent = ({isOpen, handleSidebarToggle}) => {
    const {user} = useContext(AuthContext);
    const [chats, setChats] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user?.id) return;

        getChatsByUser(user.id)
            .then(setChats)
            .catch((error) => {
                console.error("Error al obtener los chats:", error);
            });
    }, [user]);

    const handleNewChat = async () => {
        try {
            const newChat = await createNewChat(user.id);
            setChats((prev) => [{id: newChat.id, title: newChat.title}, ...prev]);
            navigate(`/Chat/${newChat.id}`);
        } catch (err) {
            console.error("Error al crear nuevo chat:", err);
        }
    };

    return (
        <SideBar $isOpen={isOpen}>
            <SideBar__buttons>
                
                <Logo__imgComponent size="large" color="white"/>
                <SideBar__title>BUHO</SideBar__title>
            </SideBar__buttons>
            <SideBar__buttonAdd onClick={handleNewChat}>
                    <FontAwesomeIcon
                        icon={faPlus}
                        style={{color: "#ffffff"}}
                    />
                     Nuevo Chat
            </SideBar__buttonAdd>

            <ChatHistorial__container>
                <ChatHistorial__titulo>Mis conversaciones</ChatHistorial__titulo>

                {chats.map((chat) => (
                    <ChatHistoryItem
                        key={chat.id}
                        title={chat.title || "Chat sin título"}
                        onClick={() => navigate(`/Chat/${chat.id}`)}
                        isActive={location.pathname === `/Chat/${chat.id}`} // Indica si es el chat activo
                    />
                ))}
            </ChatHistorial__container>

            <Pro__container>
                <FontAwesomeIcon icon={faUser} style={{color: "#808080"}}/>
                <Pro__button>{user?.name && (
                            <span style={{marginLeft: "0.5rem"}}>{user.name}</span>
                        )}</Pro__button>
                <FontAwesomeIcon icon={faGear} style={{color: "#808080"}}/>
            </Pro__container>
        </SideBar>
    );
};