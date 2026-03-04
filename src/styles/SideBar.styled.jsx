import styled from "styled-components";

export const SideBar = styled.div`
  width: ${({ $isOpen }) => ($isOpen ? "280px" : "56px")};
  height: 100vh;
  background-color: #f5f4ed;
  color: #1a1a1a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: width 0.25s ease;
  overflow: visible;
  box-sizing: border-box;
  font-family: 'Utendo', sans-serif;
`;

export const CollapsedWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 2rem);
  width: 100%;
`;

export const CollapsedAvatarWrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 12px;
`;

export const NavIcons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  align-items: center;
  padding: 0.5rem 0;
`;

export const NavIcon = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: #888;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
    transform: scale(1.1) rotate(-8deg);
  }

  &.new-chat {
    background: #F08A5D;
    color: #fff;
    border-radius: 50%;
    
    &:hover {
      background: #E06532;
      transform: scale(1.1) rotate(-8deg);
    }
  }
`;

export const SideBarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

export const LogoSection = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg, img {
    width: 100%;
    height: 100%;
  }
`;

export const LogoText = styled.h1`
  font-family: 'Harvey Serif', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  letter-spacing: 0.02em;
`;

export const HeaderIcons = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export const HeaderIcon = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 6px;
  color: #666;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 14px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
    color: #1a1a1a;
  }
`;

export const NewChatButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: calc(100% - 2rem);
  margin: 0 1rem 1.5rem;
  padding: 0.875rem 1rem;
  background: #F08A5D;
  border: none;
  border-radius: 8px;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Gontserrat', sans-serif;
  cursor: pointer;
  transition: all 0.15s ease;

  svg {
    font-size: 1rem;
    color: #fff;
  }

  &:hover {
    background: #E06532;
  }
`;

export const WideContent = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: 0;
  
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.2s ease;
`;

export const SideBar__title = styled.h1`
  font-size: 1.25rem;
  font-weight: 600;
  text-align: center;
  margin: 0.5rem 0 1rem;
  color: #1a1a1a;
`;

export const ChatHistorial__container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  overflow-y: auto;
  flex-grow: 1;
  padding: 0 0.5rem;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
`;

export const ChatHistorial__titulo = styled.label`
  color: #666;
  font-size: 0.75rem;
  text-transform: none;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
`;

export const ChatHistoryItemStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0.75rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.15s ease;
  background: ${({ $isActive }) => ($isActive ? 'rgba(0, 0, 0, 0.05)' : 'transparent')};
  
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

export const ChatHistoryItemText = styled.span`
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Pro__container = styled.div`
  display: none;
`;

export const Pro__button = styled.button`
  display: none;
`;

export const UserSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: auto;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const UserAvatar = styled.div`
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  background-color: #444;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  svg {
    color: #888;
    font-size: 16px;
  }
`;

export const UserName = styled.span`
  color: #1a1a1a;
  font-size: 0.875rem;
  font-weight: 500;
`;

export const SettingsButton = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 6px;
  color: #888;
  cursor: pointer;
  transition: all 0.15s ease;
  font-size: 16px;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
    color: #1a1a1a;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0.5rem 0;
`;

export const UserDropdown = styled.div`
  position: fixed;
  bottom: 4.5rem;
  left: ${({ $collapsed }) => ($collapsed ? '10px' : '10px')};
  background: #2a2a2a;
  border-radius: 12px;
  padding: 0.5rem 0;
  min-width: 240px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  z-index: 1100;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(10px)')};
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
`;

export const UserDropdownEmail = styled.div`
  padding: 0.75rem 1rem;
  color: #e0e0e0;
  font-size: 0.8rem;
  border-bottom: 1px solid #3a3a3a;
  margin-bottom: 0.25rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserDropdownItem = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
  padding: 0.625rem 1rem;
  background: transparent;
  border: none;
  color: #e0e0e0;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background 0.15s ease;
  text-align: left;

  svg {
    color: #888;
    font-size: 14px;
    width: 16px;
  }

  &:hover {
    background: #3a3a3a;
  }

  &.logout {
    color: #e0e0e0;
    border-top: 1px solid #3a3a3a;
    margin-top: 0.25rem;
    padding-top: 0.75rem;
  }
`;

export const UserSectionWrapper = styled.div`
  position: relative;
`;
