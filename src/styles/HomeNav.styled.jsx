import styled from 'styled-components';

// Responsive Navbar Styles para la Home
export const NavToggleButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: #1E1E1E;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  z-index: 101;

  @media (max-width: 640px) {
    display: flex;
    align-items: center;
    justify-content: center;
    order: 10;
  }

  &:hover {
    transform: scale(1.1);
    color: #6EA8FE;
  }
`;

export const ResponsiveNavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  position: relative;

  @media (max-width: 1024px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    gap: 0.75rem;
    justify-content: flex-end;
    flex-grow: 1;
  }

  @media (max-width: 640px) {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-radius: 0 0 1.5rem 1.5rem;
    padding: 1.5rem;
    gap: 1rem;
    display: ${props => props.$isOpen ? 'flex' : 'none'};
    box-shadow: 0 8px 24px rgba(29, 33, 41, 0.15);
    z-index: 100;
    width: 100%;
    box-sizing: border-box;
    align-items: flex-start;
  }
`;

export const ResponsiveNavLink = styled.a`
  color: #505050;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 500;
  position: relative;
  padding-bottom: 0.25rem;
  letter-spacing: 0.01em;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px; 
    background: #FF8A5B; 
    transition: width 0.3s ease;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.875rem;
    padding: 0.35rem 0.5rem;
    letter-spacing: normal;
  }

  @media (max-width: 640px) {
    font-size: 1rem;
    padding: 0.5rem 0;

    &::after {
      display: none;
    }
  }
`;

export const ResponsiveNavButton = styled.button`
  background: transparent;
  color: #1E1E1E;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid #FF8A5B; /* Color del borde */
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 1.125rem;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.01em;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: #FF8A5B; /* Color del fondo al pasar el mouse */
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 138, 91, 0.3); /* Sombra con el nuevo color */
    border-color: #FF8A5B; /* Color del borde al pasar el mouse */

    &::before {
      left: 0;
    }
  }

  @media (max-width: 1024px) {
    padding: 0.45rem 1.25rem;
    font-size: 1rem;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.875rem;
  }

  @media (max-width: 640px) {
    padding: 0.6rem 1.25rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    padding: 0.35rem 0.875rem;
    font-size: 0.8125rem;
    width: auto;
  }
`;
