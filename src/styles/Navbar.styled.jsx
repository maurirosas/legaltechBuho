import styled from "styled-components";

const Navbar__toggle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Toggle__img = styled.img`
    width: 24px;
`;

const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    background: #FFFFFF;
    padding: 1rem 3rem;
    position: relative;
    height: 5vh;
    border-top-right-radius: 21px;
`;
const NavLinkWrapper = styled.div``;
const StyledNavLink = styled.button`
    background: transparent;
    margin: 0;
    padding-block: 0;
    padding-inline: 0;
    border-width: 0;
`;

const SidebarToggle = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
    display: flex;
    align-items: center;

    &:hover {
        opacity: 0.8;
    }
`;
const UserIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const UserIcon__image = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
`;
const SidebarButton = styled.button`
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    margin-right: 10px;
`;

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: ${({isOpen}) => (isOpen ? "0" : "-250px")};
    width: 250px;
    height: 100%;
    background-color: #3aafa9;
    color: white;
    transition: left 0.3s ease;
    padding: 20px;
    box-shadow: ${({isOpen}) =>
            isOpen ? "2px 0 5px rgba(0,0,0,0.5)" : "none"};

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin: 20px 0;
        font-size: 18px;
    }
`;
export {
    Navbar__toggle,
    UserIcon,
    UserIcon__image,
    NavbarWrapper,
    NavLinkWrapper,
    StyledNavLink,
    SidebarButton,
    Sidebar,
    Toggle__img,
    SidebarToggle,
};
