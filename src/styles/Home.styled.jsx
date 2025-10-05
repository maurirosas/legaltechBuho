import styled, { keyframes, createGlobalStyle } from "styled-components";

// Global Styles para aplicar Tiempos Text
export const GlobalHomeFonts = createGlobalStyle`
  * {
    font-family: "tiempos-text", Georgia, serif !important;
  }
`;

// Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Main Container
export const HomeContainer = styled.div`
  min-height: 100vh;
  background: #F5F1E8;
`;

// Header
export const Header = styled.header`
  background: #F5F1E8;
  position: sticky;
  top: 0;
  z-index: 50;
  padding: 1.5rem 3rem;
`;

export const HeaderContent = styled.div`
  max-width: 90rem;
  margin: 0 auto;
  background: #1D2129;
  border-radius: 3rem;
  padding: 0.75rem 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  box-shadow: 0 4px 16px rgba(29, 33, 41, 0.12);

  &:hover {
    box-shadow: 0 6px 24px rgba(29, 33, 41, 0.18);
    border-color: rgba(255, 255, 255, 0.2);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const LogoBox = styled.div`
  width: 2rem;
  height: 2rem;
  background: #2E4057;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  span {
    font-size: 1rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: #1D2129;
    transform: scale(1.05);

    span {
      transform: scale(1.1);
    }
  }
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const NavLinks = styled.div`
  display: none;
  gap: 2rem;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const NavLink = styled.a`
  color: rgba(255, 255, 255, 0.9);
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
    background: white;
    transition: width 0.3s ease;
  }

  &:hover {
    color: white;

    &::after {
      width: 100%;
    }
  }
`;

export const NavButton = styled.button`
  background: transparent;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.5);
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
    background: white;
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: #1D2129;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
    border-color: white;

    &::before {
      left: 0;
    }
  }
`;

// Hero Section
export const HeroSection = styled.section`
  max-width: 72rem;
  margin: 0 auto;
  padding: 6rem 1.5rem;
  text-align: center;
  background: #F5F1E8;
`;

export const HeroTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 3.75rem);
  font-weight: 300;
  color: #1D2129;
  margin-bottom: 1.5rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
`;

export const HeroSubtitle = styled.p`
  font-size: 1rem;
  color: #65676B;
  margin-bottom: 3rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const ChatInputDemo = styled.div`
  max-width: 42rem;
  margin: 0 auto;
`;

export const ChatInputCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;
  border: 1px solid #E4E6EB;
  box-shadow: 0 4px 16px rgba(29, 33, 41, 0.08);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(29, 33, 41, 0.12);
    transform: translateY(-2px);
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1D2129;
  margin-bottom: 0.5rem;
  text-align: left;
`;

export const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 0.5rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 2.75rem;
  padding: 0.625rem 3rem 0.625rem 1rem;
  border: 1px solid #E4E6EB;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.3s ease;
  background: #F9F9F7;
  color: #1D2129;
  line-height: 1.5;
  box-sizing: border-box;

  &:focus {
    border-color: #2E4057;
    box-shadow: 0 0 0 4px rgba(46, 64, 87, 0.15);
    background: white;
  }

  &::placeholder {
    color: #65676B;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #2E4057;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  &:hover {
    color: #1D2129;
    background: rgba(46, 64, 87, 0.1);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const InputNote = styled.p`
  font-size: 0.75rem;
  color: #65676B;
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-align: left;
`;

// Slider Section - NUEVA VERSIÓN CON IMAGEN Y TEXTO
export const SliderSection = styled.section`
  position: relative;
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  min-height: 100vh;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const SlidesFixed = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  min-height: 100vh;
  width: 100vw;
  overflow: hidden;
  z-index: 1;
`;

export const SlidePanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  will-change: transform;
  transition: transform 0.8s ease-in-out;
  z-index: ${props => props.$zIndex || 1};
  transform: translateY(${props => props.$translateY || '0vh'});
`;

export const SlideBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.$gradient || '#F9F9F7'};
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.$isDark ? 'white' : '#1D2129'};
  padding: 2rem;
`;

export const ContentInner = styled.div`
  max-width: 80rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};

  @media (max-width: 968px) {
    flex-direction: column;
    gap: 2rem;
  }

  & > * {
    animation: ${fadeIn} 0.7s ease-out both;
  }

  & > *:nth-child(2) {
    animation-delay: 0.15s;
  }
`;

export const SlideImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 400px;
  background: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.05)' : 'white'};
  border-radius: 1rem;
  border: 2px dashed ${props => props.$isDark ? 'rgba(255, 255, 255, 0.2)' : '#E4E6EB'};

  img, video {
    max-width: 100%;
    height: auto;
    border-radius: 1rem;
  }
`;

export const SlideTextContainer = styled.div`
  flex: 1;
  text-align: left;
`;

export const StepNumber = styled.div`
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 0.3em;
  opacity: ${props => props.$isDark ? '0.7' : '0.6'};
  margin-bottom: 2rem;
  color: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.9)' : 'inherit'};
`;

export const SlideTitle = styled.h3`
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: 300;
  line-height: 1.2;
  margin-bottom: 2rem;
  letter-spacing: -0.02em;
  color: ${props => props.$isDark ? 'white' : '#1D2129'};

  .subtitle {
    opacity: 0.8;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  opacity: 0.9;
  font-weight: 300;
  color: ${props => props.$isDark ? 'rgba(255, 255, 255, 0.85)' : '#1D2129'};

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// Navigation Dots
export const ParallaxNav = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  opacity: ${props => props.$visible ? '1' : '0'};
  transition: opacity 0.5s;
`;

export const NavDot = styled.div`
  cursor: pointer;
`;

export const DotCircle = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${props => props.$active ? 'transparent' : 'rgba(255, 255, 255, 0.6)'};
  border: ${props => props.$active ? '1px solid white' : 'none'};
  transition: all 0.3s ease;
  transform: scale(${props => props.$active ? '1.2' : '1'});
  box-shadow: ${props => props.$active ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none'};

  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
`;

// Benefits Section
export const BenefitsSection = styled.section`
  padding: 5rem 0;
  background: #1D2129;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const BenefitsContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const BenefitsHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

export const BenefitsTitle = styled.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: white;
  margin-bottom: 1rem;
  letter-spacing: 0.15em;

  .italic {
    font-style: italic;
  }
`;

export const BenefitsSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1.125rem;
  font-weight: 300;
`;

export const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const BenefitCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, transparent 100%);
    transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover {
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
    transform: translateY(-4px);
    background: rgba(255, 255, 255, 0.08);

    &::before {
      height: 100%;
    }

    h4 {
      color: white;
    }
  }
`;

export const BenefitTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1rem;
  letter-spacing: 0.1em;
  transition: color 0.3s;

  .subtitle {
    font-style: italic;
    font-size: 1.125rem;
    color: rgba(255, 255, 255, 0.6);
    letter-spacing: normal;
  }
`;

export const BenefitDescription = styled.p`
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  font-weight: 300;
`;

// CTA Section
export const CTASection = styled.section`
  padding: 6rem 0;
  background: #1D2129;
  color: white;
  border-top: 1px solid rgba(228, 230, 235, 0.1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  }
`;

export const CTAContainer = styled.div`
  max-width: 56rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

export const CTATitle = styled.h3`
  font-size: 1.875rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: white;
`;

export const CTASubtitle = styled.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  background: white;
  color: #1D2129;
  padding: 1rem 2.5rem;
  border-radius: 0.5rem;
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: #2E4057;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    color: white;
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(255, 255, 255, 0.2);

    &::before {
      width: 300%;
      height: 300%;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }
`;

export const CTANote = styled.p`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 1rem;
`;

// Footer
export const Footer = styled.footer`
  background: #0F1419;
  color: white;
  padding: 3rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

export const FooterContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FooterLogoBox = styled.div`
  width: 2rem;
  height: 2rem;
  background: #2E4057;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  span {
    font-size: 0.875rem;
  }

  &:hover {
    background: white;
    transform: rotate(10deg) scale(1.1);
  }
`;

export const FooterLogoText = styled.span`
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
`;

export const FooterCopyright = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.5);
`;
