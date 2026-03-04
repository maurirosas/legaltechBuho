import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus, faCog, faUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

import logoBlack from "../assets/logo-black.png";

import {
    SideBar,
    NavIcons,
    NavIcon,
    WideContent,
    ChatHistorial__container,
    ChatHistorial__titulo,
    SideBarHeader,
    LogoSection,
    LogoIcon,
    LogoText,
    HeaderIcons,
    HeaderIcon,
    NewChatButton,
    ChatHistoryItemStyled,
    ChatHistoryItemText,
    UserSection,
    UserInfo,
    UserAvatar,
    UserName,
    SettingsButton,
    CollapsedWrapper,
    CollapsedAvatarWrapper,
    UserDropdown,
    UserDropdownEmail,
    UserDropdownItem,
    UserSectionWrapper,
} from "../styles/SideBar.styled";

import { createNewChat, getChatsByUser } from "../services/chatService.js";
import { AuthContext } from "../context/AuthContext";
import userAvatarPlaceholder from "../assets/users/pet.png";

export const SideBarComponent = ({ isOpen, handleSidebarToggle }) => {
    const { user, logout } = useContext(AuthContext);
    const [chats, setChats] = useState([]);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!user?.id) return;
        getChatsByUser(user.id)
            .then(setChats)
            .catch((error) => {
                console.error("Error al obtener los chats:", error);
            });
    }, [user, isOpen]);

    const handleNewChat = async () => {
        if (!user?.id) return;
        try {
            const newChat = await createNewChat(user.id);
            setChats((prev) => [{ id: newChat.id, title: newChat.title }, ...prev]);
            navigate(`/Chat/${newChat.id}`);
        } catch (err) {
            console.error("Error al crear nuevo chat:", err);
        }
    };

    // Generate chat title with CASO prefix
    const getChatTitle = (chat, index) => {
        const caseNumber = chats.length - index;
        const title = chat.title || "Sin título";
        return `CASO ${caseNumber}: ${title}`;
    };

    return (
        <SideBar $isOpen={isOpen}>
            {/* Collapsed state icons */}
            {!isOpen && (
                <CollapsedWrapper>
                    <NavIcons>
                        <NavIcon title="Abrir menú" onClick={handleSidebarToggle}>
                            <FontAwesomeIcon icon={faBars} />
                        </NavIcon>
                        <NavIcon title="Nuevo Chat" onClick={handleNewChat} className="new-chat">
                            <FontAwesomeIcon icon={faPlus} />
                        </NavIcon>
                    </NavIcons>
                    <CollapsedAvatarWrapper>
                        <UserDropdown $isOpen={userMenuOpen} $collapsed>
                            <UserDropdownEmail>
                                {user?.email || "usuario@email.com"}
                            </UserDropdownEmail>
                            <UserDropdownItem>
                                <FontAwesomeIcon icon={faCog} />
                                Configuración
                            </UserDropdownItem>
                            <UserDropdownItem className="logout" onClick={logout}>
                                <FontAwesomeIcon icon={faRightFromBracket} />
                                Cerrar sesión
                            </UserDropdownItem>
                        </UserDropdown>
                        <UserAvatar
                            title="Mi perfil"
                            onClick={() => setUserMenuOpen(!userMenuOpen)}
                            style={{ cursor: 'pointer' }}
                        >
                            {user?.avatar ? (
                                <img src={user.avatar} alt="Usuario" />
                            ) : (
                                <FontAwesomeIcon icon={faUser} />
                            )}
                        </UserAvatar>
                    </CollapsedAvatarWrapper>
                </CollapsedWrapper>
            )}

            {/* Expanded content */}
            <WideContent $isOpen={isOpen}>
                {/* Header with logo */}
                <SideBarHeader>
                    <LogoSection>
                        <LogoIcon>
                            <img src={logoBlack} alt="BÚHO" />
                        </LogoIcon>
                        <LogoText>BÚHO</LogoText>
                    </LogoSection>
                    <NavIcon title="Cerrar menú" onClick={handleSidebarToggle}>
                        <FontAwesomeIcon icon={faBars} />
                    </NavIcon>
                </SideBarHeader>

                {/* New Chat Button */}
                <NewChatButton onClick={handleNewChat}>
                    <FontAwesomeIcon icon={faPlus} />
                    Nuevo Chat
                </NewChatButton>

                {/* Chat History */}
                <ChatHistorial__container>
                    <ChatHistorial__titulo>Mis conversaciones</ChatHistorial__titulo>
                    {chats.map((chat, index) => (
                        <ChatHistoryItemStyled
                            key={chat.id}
                            $isActive={location.pathname === `/Chat/${chat.id}`}
                            onClick={() => navigate(`/Chat/${chat.id}`)}
                        >
                            <ChatHistoryItemText>
                                {getChatTitle(chat, index)}
                            </ChatHistoryItemText>
                        </ChatHistoryItemStyled>
                    ))}
                </ChatHistorial__container>

                {/* User Section */}
                <UserSectionWrapper>
                    <UserDropdown $isOpen={userMenuOpen}>
                        <UserDropdownEmail>
                            {user?.email || "usuario@email.com"}
                        </UserDropdownEmail>
                        <UserDropdownItem>
                            <FontAwesomeIcon icon={faCog} />
                            Configuración
                        </UserDropdownItem>
                        <UserDropdownItem className="logout" onClick={logout}>
                            <FontAwesomeIcon icon={faRightFromBracket} />
                            Cerrar sesión
                        </UserDropdownItem>
                    </UserDropdown>
                    <UserSection onClick={() => setUserMenuOpen(!userMenuOpen)} style={{ cursor: 'pointer' }}>
                        <UserInfo>
                            <UserAvatar>
                                {user?.avatar ? (
                                    <img src={user.avatar} alt="Usuario" />
                                ) : (
                                    <FontAwesomeIcon icon={faUser} />
                                )}
                            </UserAvatar>
                            <UserName>{user?.name || "Usuario"}</UserName>
                        </UserInfo>
                        <SettingsButton title="Configuración">
                            <FontAwesomeIcon icon={faCog} />
                        </SettingsButton>
                    </UserSection>
                </UserSectionWrapper>
            </WideContent>
        </SideBar>
    );
};

export default SideBarComponent;
