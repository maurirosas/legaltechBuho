import styled, { keyframes, createGlobalStyle } from "styled-components";
import HarveySerifRegular from '../assets/fonts/Harvey Serif Regular.woff2';
import HarveySansRegular from '../assets/fonts/HarveySansDiatypeVariable-Regular.woff2';

import bg1 from '../assets/background_images/bg1.avif';
import bg2 from '../assets/background_images/bg2.avif';
import bg3 from '../assets/background_images/bg3.avif';
import footerBg from '../assets/background_images/Mesa de trabajo 8-80.jpg';
import benefitsBg from '../assets/background_images/Fondo lineas 123.svg';
import heroBg from '../assets/background_images/Mesa de trabajo 1.svg';
import videoBg from '../assets/background_images/Mesa de trabajo 2-80.jpg';
import carouselBg from '../assets/background_images/Mesa de trabajo 5-80.jpg';
import slide1Bg from '../assets/background_images/Mesa de trabajo 6-80.jpg';
import slide2Bg from '../assets/background_images/Mesa de trabajo 3-80.jpg';
import slide3Bg from '../assets/background_images/Mesa de trabajo 4-80.jpg';

export const GlobalHomeFonts = createGlobalStyle`
  @font-face {
    font-family: 'Harvey Serif';
    src: url(${HarveySerifRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* Mejora el rendimiento de carga de la fuente */
  }
  @font-face {
    font-family: 'Harvey Sans';
    src: url(${HarveySansRegular}) format('woff2');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* Mejora el rendimiento de carga de la fuente */
  }

  * {
    font-family: "Harvey Serif", Georgia, serif !important;
    box-sizing: border-box !important;
  }
`;

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

export const HomeContainer = styled.div`
  min-height: 100vh;
  background: #F1F3F5;
  overflow-x: hidden; /* Solución para el scroll horizontal */
`;

export const Header = styled.header`
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  padding: 1.5rem 3rem;
  transform: ${props => props.$isVisible ? 'translateY(0)' : 'translateY(-100%)'};
  transition: transform 0.3s ease-in-out, padding 0.3s ease;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
  }
`;

export const HeaderContent = styled.div`
  max-width: ${props => props.$isScrolled ? '70rem' : '90rem'};
  margin: 0 auto;
  background: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent'};
  backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  -webkit-backdrop-filter: ${props => props.$isScrolled ? 'blur(10px)' : 'none'};
  border-radius: 3rem;
  padding: 0.75rem 2rem;
  border: ${props => props.$isScrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid transparent'};
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: ${props => props.$isScrolled
    ? '0 8px 24px rgba(29, 33, 41, 0.2)'
    : 'none'};

  &:hover {
    box-shadow: ${props => props.$isScrolled
    ? '0 10px 32px rgba(29, 33, 41, 0.25)'
    : 'none'};
    border-color: ${props => props.$isScrolled ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    border-radius: 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.75rem;
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
  gap: 0rem;
`;

export const LogoBox = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    transition: opacity 0.3s ease;
  }

  .logo-normal {
    opacity: 1;
  }

  .logo-hover {
    opacity: 0;
  }

  &:hover {
    transform: rotate(10deg) scale(1.1);

    
  }

  @media (max-width: 768px) {
    width: 2rem;
    height: 2rem;
  }

  @media (max-width: 480px) {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

export const LogoText = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  color: #000000ff;
  margin: 0.3rem;
  padding-top: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const NavLinks = styled.div`
  color: #000000ff;
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 767px) {
    gap: 0.75rem;
    justify-content: flex-end;
    flex-grow: 1;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const NavLink = styled.a`
  color: #000000ff;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.125rem;
  font-weight: 400;
  position: relative;
  padding-bottom: 0.5rem;
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
    color: #FF8A5B;

    &::after {
      width: 100%;
    }
  }

  @media (max-width: 767px) {
    font-size: 0.9375rem;
    padding: 0.35rem 0.5rem;
    letter-spacing: normal;
  }
`;

export const NavButton = styled.button`
  background: #1E1E1E;
  color: #FFFFFF;
  padding: 0.625rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.125rem;
  position: relative;
  overflow: hidden;
  letter-spacing: 0.01em;

  &:hover {
    background: #000000;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(30, 30, 30, 0.3);
  }

  @media (max-width: 767px) {
    padding: 0.5rem 1.25rem;
    font-size: 0.9375rem;
  }

  @media (max-width: 480px) {
    padding: 0.4375rem 1rem;
    font-size: 0.875rem;
  }
`;

export const HeroMainSection = styled.section`
  min-height: auto; /* Eliminamos la altura mínima para hacerlo más compacto */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 6.4rem 1rem 8rem; 
  background-image: url(${heroBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-top: calc(4.4rem + 120px); 

  @media (max-width: 768px) {
    padding: 2.4rem 1rem 3rem; 
    padding-top: calc(2.4rem + 100px); 
    min-height: auto;
  }

  @media (max-width: 480px) {
    min-height: 90vh;
    padding: 1.6rem 1rem 2rem; 
    padding-top: calc(0.2rem + 80px); 
  }
`;

export const HeroMainContent = styled.div`
  max-width: 60rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 0.8rem;

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const HeroLogo = styled.img`
  width: 80px;
  height: 80px;
`;

export const HeroMainTitle = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  font-weight: 400;
  color: #1E1E1E;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin: 0;
  text-align: center;

  .underline {
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      left: -2%;
      right: -2%;
      bottom: -0.15em;
      height: 0.35em;
      background: transparent;
      border-top: 3px solid #FF8A5B;
      border-radius: 50% 50% 0 0;
    }
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 6vw, 3rem);
    line-height: 1.2;
    
    .underline::after {
      border-top-width: 2.5px;
    }
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 7vw, 2.5rem);
    
    .underline::after {
      border-top-width: 2px;
    }
  }
`;
export const HeroMainSubtitle = styled.p`
  font-size: 1.70rem; 
  color: #000000ff;
  line-height: 1.6;
  margin: 0;
  max-width: 50rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const HeroMainActions = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 36rem; 

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    max-width: 28rem;
    gap: 0.75rem;
  }
`;

export const VideoDemoSection = styled.section`
  min-height: auto; 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: transparent;
  padding: 4rem 1rem; 
  background-image: url(${videoBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 3rem 0.8rem;
  }

  @media (max-width: 480px) {
    min-height: 90vh;
    padding: 2rem 0.6rem;
  }
`;

export const VideoWrapper = styled.div`
  max-width: 56rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 2.5rem;
  }

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

export const VideoTitle = styled.h2`
  font-family: 'Harvey Sans', sans-serif;
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #1E1E1E;
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
  line-height: 1.3;
`;


export const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  aspect-ratio: 16 / 9;
  background: white;
  border-radius: 1.5rem;
  border: 2px solid #D1D5DB;
  box-shadow: 0 8px 32px rgba(30, 30, 30, 0.06);
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: 0 12px 48px rgba(165, 201, 255, 0.15);
    transform: ${props => props.$isExpanded ? 'none' : 'translateY(-4px)'};
  }

  @media (max-width: 768px) {
    border-radius: 1rem;
  }

  @media (max-width: 480px) {
    border-radius: 0.75rem;
    border-width: 1px;
  }
`;

export const VideoInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #E5E7EB;
  border-radius: 0;
  overflow: hidden;
  transition: border-radius 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: center;

  > div,
  > div > div,
  iframe {
    width: 100% !important;
    height: 100% !important;
  }

  @media (max-width: 480px) {
    border-radius: 0;
  }
`;

export const VideoDescription = styled.p`
  font-size: 1.70rem;
  color: #000000ff;
  line-height: 1.7;
  text-align: center;
  max-width: 55rem;
  margin: 0;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

export const HeroSection = styled.section`
  max-width: 90rem;
  margin: 0 auto;
  padding: 3rem 3rem;
  background: #F1F3F5;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;
export const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 4rem;
  align-items: center;
  min-height: calc(100vh - 200px);

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    min-height: auto;
  }

  @media (max-width: 768px) {
    gap: 2rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;
export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
  }
`;

export const HeroTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 300;
  color: #1E1E1E;
  line-height: 1.3;
  letter-spacing: -0.01em;
  margin: 0;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.125rem;
  color: #505050;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9375rem;
  }
`;

export const ChatInputDemo = styled.div`
  max-width: 42rem;
  margin: 0 auto;
`;

export const HeroActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

export const GoogleLoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  background: #4285F4;
  color: #FFFFFF;
  padding: 0.875rem 1.75rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  transition: all 0.3s ease;
  flex: 1;
  box-shadow: 0 2px 8px rgba(66, 133, 244, 0.25);
  min-width: 250px;

  &:hover {
    background: #357ae8;
    box-shadow: 0 4px 12px rgba(66, 133, 244, 0.35);
    transform: translateY(-1px);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    background: white;
    border-radius: 0.125rem;
    padding: 0.125rem;
  }

  @media (max-width: 768px) {
    padding: 0.8125rem 1.5rem;
    font-size: 1.125rem;
    min-width: 220px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    gap: 0.5rem;
    min-width: 200px;

    svg {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`;

export const RequestAccessButton = styled.button`
  background: #1E1E1E;
  color: #FFFFFF;
  padding: 0.875rem 1.75rem;
  border: 2px solid #1E1E1E;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: 500;
  transition: all 0.3s ease;
  flex: 1;
  box-shadow: 0 2px 8px rgba(30, 30, 30, 0.15);
  min-width: 250px;

  &:hover {
    background: #000000;
    border-color: #000000;
    box-shadow: 0 4px 12px rgba(30, 30, 30, 0.25);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    padding: 0.8125rem 1.5rem;
    font-size: 1.125rem;
    min-width: 220px;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    min-width: 200px;
  }
`;

export const HeroRight = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Aspect ratio 16:9 */
  background: white;
  border-radius: 1rem;
  border: 2px solid #D1D5DB;
  box-shadow: 0 8px 32px rgba(30, 30, 30, 0.06);
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 48px rgba(165, 201, 255, 0.15);
    transform: translateY(-4px);
  }

  @media (max-width: 968px) {
    padding-top: 56.25%;
  }

  @media (max-width: 768px) {
    border-radius: 0.75rem;
  }

  @media (max-width: 480px) {
    border-radius: 0.5rem;
    border-width: 1px;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #E5E7EB;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(165, 201, 255, 0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    position: relative;
    z-index: 1;
    width: 40px;
    height: 40px;
    color: #A5C9FF;
    opacity: 0.7;
  }
`;

export const ChatInputCard = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 1.5rem 2rem;
  border: 1px solid #D1D5DB;
  box-shadow: 0 4px 16px rgba(30, 30, 30, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(165, 201, 255, 0.12);
    transform: translateY(-2px);
  }
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 400;
  color: #1E1E1E;
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
  border: 1px solid #D1D5DB;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.3s ease;
  background: #E5E7EB;
  color: #1E1E1E;
  line-height: 1.5;
  box-sizing: border-box;

  &:focus {
    border-color: #A5C9FF;
    box-shadow: 0 0 0 3px rgba(165, 201, 255, 0.15);
    background: white;
  }

  &::placeholder {
    color: #505050;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #A5C9FF;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  &:hover {
    color: #6EA8FE;
    background: rgba(165, 201, 255, 0.15);
    transform: translateY(-50%) scale(1.1);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

export const InputNote = styled.p`
  font-size: 0.75rem;
  color: #505050;
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
  margin-top: 0;
  margin-bottom: 0;
  overflow: hidden;
  background: #1E1E1E;
`;

export const SlidesFixed = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  height: 100vh;
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
  min-height: 100vh;
  will-change: opacity;
  transition: opacity 0.6s ease-in-out;
  z-index: ${props => props.$zIndex || 1};
  opacity: ${props => props.$isActive ? 1 : 0};
  pointer-events: ${props => props.$isActive ? 'auto' : 'none'};
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
`;

export const SlideBg = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: ${props => {
    if (props.$slideIndex === 0) return `url(${slide1Bg})`;
    if (props.$slideIndex === 1) return `url(${slide2Bg})`;
    if (props.$slideIndex === 2) return `url(${slide3Bg})`;
    return 'transparent';
  }};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  pointer-events: none;
`;

export const SlideContent = styled.div`
  position: relative;
  z-index: 10;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;

  @media (max-width: 968px) {
    height: auto;
    min-height: 100vh;
    padding: 2rem 1rem;
  }
`;

export const ContentInner = styled.div`
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
  direction: ${props => props.$reverse ? 'ltr' : 'rtl'};

  & > * {
    direction: ltr;
  }

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 600px;
    direction: ltr;
  }
`;

export const SlideImageContainer = styled.div`
  background: ${props => {
    if (props.$slideIndex === 0) return 'transparent';
    if (props.$slideIndex === 1) return 'transparent';
    if (props.$slideIndex === 2) return 'transparent';
    return '#F4EDE3';
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  width: 100%;
  height: 100%;
  overflow: hidden;

  img, video {
    max-width: 100%;
    height: auto;
  }

  @media (max-width: 968px) {
    padding: 2rem;
    min-height: 400px;
  }

  @media (max-width: 480px) {
    padding: 1.5rem;
    min-height: 300px;
  }
`;

export const SlideTextContainer = styled.div`
  background: ${props => {
    if (props.$slideIndex === 0) return 'transparent';
    if (props.$slideIndex === 1) return 'transparent';
    if (props.$slideIndex === 2) return 'transparent';
    return '#F4EDE3';
  }};
  color: ${props => {
    if (props.$slideIndex === 0) return '#FFFFFF'; // Texto blanco en negro
    if (props.$slideIndex === 1) return '#1E1E1E'; // Texto oscuro en beige
    if (props.$slideIndex === 2) return '#1E1E1E'; // Texto oscuro en celeste
    return '#1E1E1E'; // Default oscuro
  }};
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 968px) {
    padding: 3rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 1.5rem;
  }
`;

export const StepNumber = styled.div`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  opacity: 0.6;
  margin-bottom: 2rem;
  color: ${props => {
    if (props.$slideIndex === 0) return '#FFFFFF';
    if (props.$slideIndex === 1) return '#1E1E1E';
    if (props.$slideIndex === 2) return '#1E1E1E';
    return '#1E1E1E';
  }};
  text-transform: uppercase;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 0.8125rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.75rem;
    margin-bottom: 1rem;
  }
`;

export const SlideTitle = styled.h3`
  font-size: clamp(3rem, 6vw, 4.5rem);
  font-weight: 500;
  line-height: 1.1;
  margin-bottom: 2.5rem;
  letter-spacing: -0.03em;
  color: ${props => {
    if (props.$slideIndex === 0) return '#FFFFFF';
    if (props.$slideIndex === 1) return '#1E1E1E';
    if (props.$slideIndex === 2) return '#1E1E1E';
    return '#1E1E1E';
  }};
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 5vw, 2.75rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 5vw, 2.25rem);
    margin-bottom: 1.25rem;
  }
`;

export const SlideDescription = styled.p`
  font-size: 1.75rem;
  line-height: 1.5;
  opacity: 0.8;
  font-weight: 400;
  color: ${props => {
    if (props.$slideIndex === 0) return '#E0E0E0';
    if (props.$slideIndex === 1) return '#505050';
    if (props.$slideIndex === 2) return '#505050';
    return '#505050';
  }};
  margin-bottom: 2.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
    margin-bottom: 1.5rem;
  }
`;

export const ParallaxNav = styled.div`
  position: fixed;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 50;
  display: ${props => props.$visible ? 'flex' : 'none'};
  flex-direction: column;
  gap: 0.75rem;
  transition: opacity 0.5s;

  @media (max-width: 768px) {
    right: 1rem;
    gap: 0.5rem;
  }

  @media (max-width: 480px) {
    right: 0.5rem;
  }
`;

export const NavDot = styled.div`
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    padding: 0.75rem;
  }
`;

export const DotCircle = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${props => props.$active ? '#A5C9FF' : 'rgba(165, 201, 255, 0.4)'};
  border: ${props => props.$active ? '2px solid #A5C9FF' : '1px solid rgba(165, 201, 255, 0.4)'};
  transition: all 0.3s ease;
  transform: scale(${props => props.$active ? '1.3' : '1'});
  box-shadow: ${props => props.$active ? '0 0 12px rgba(165, 201, 255, 0.6)' : 'none'};

  &:hover {
    background-color: #6EA8FE;
    border-color: #6EA8FE;
    transform: scale(1.2);
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }

  @media (max-width: 480px) {
    width: 12px;
    height: 12px;
    border-width: 2px;
  }
`;

export const BenefitsSection = styled.section`
  padding: 5rem 0;
  background: transparent;
  background-image: url(${benefitsBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-top: 1px solid rgba(209, 213, 219, 0.3);
  position: relative;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }

  @media (max-width: 480px) {
    padding: 2rem 0;
  }
`;

export const BenefitsContainer = styled.div`
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    padding: 0;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const BenefitsHeader = styled.div`
  text-align: center;
  margin-top: -5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    margin-top: -1rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-top: 0;
    margin-bottom: 2rem;
  }
`;

export const BenefitsTitle = styled.h3`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  color: #1E1E1E;
  margin-bottom: 1rem;
  letter-spacing: 0.05em;

  .italic {
    font-style: italic;
  }

  @media (max-width: 768px) {
    font-size: clamp(2rem, 5vw, 3rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(1.75rem, 5vw, 2.5rem);
  }
`;

export const BenefitsItalic = styled.span`
  font-style: italic;
`;

export const BenefitsSubtitle = styled.p`
  color: #505050;
  font-size: 2.5rem;
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

export const BenefitsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-auto-rows: minmax(auto, max-content);
    gap: 1.5rem;
    width: 100%;
    max-width: none;
    margin: 0;
    padding: 0 3rem;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
      padding: 0 1.5rem;
    }

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      padding: 0 1rem;
    }
  `;

export const BenefitCard = styled.div`
    background: ${props => props.$theme === 'light' ? '#F7F2E7' : '#1E1E1E'};
    border: none;
    border-radius: 1.5rem;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2.5rem 2.5rem;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);

    /* Grid positioning: 1 largo izquierda (angosta), 2 centro (apilados), 1 derecha (angosta) */
    /* 80% - izquierda, angosta y alta (2 filas) */
    &:nth-child(1) {
      grid-column: 1 / 4;
      grid-row: 1 / 3;
      padding: 3rem 2rem;
      min-height: 600px;
      margin-top: -3rem;
      margin-left: 1.5rem;
      margin-right: 0rem;

      h4 {
        font-size: clamp(5rem, 10vw, 7.5rem);
        transform: scaleY(1.2) scaleX(1);
      }
    }

    /* 260 HORAS - centro arriba */
    &:nth-child(2) {
      grid-column: 5 / 9;
      grid-row: 1;
      transform: translate(-3rem, -2.8rem);
      margin-left: -2rem;
      margin-right: -2rem;
    }

    /* 200 HORAS - centro abajo */
    &:nth-child(3) {
      grid-column: 5 / 9;
      grid-row: 2;
      transform: translate(-3rem, -0.3rem);
      margin-left: -2rem;
      margin-right: -2rem;
    }

    /* 24/7 - derecha, angosta y alta (2 filas) */
    &:nth-child(4) {
      grid-column: 9 / 12;
      grid-row: 1 / 3;
      padding: 3rem 2rem;
      min-height: 600px;
      margin-top: -3rem;
      margin-left: 6rem;

      h4 {
        font-size: clamp(5rem, 10vw, 7.5rem);
        transform: scaleY(1.2) scaleX(1);
      }
    }

    &:hover {
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    @media (max-width: 1024px) {
      grid-column: auto !important;
      grid-row: auto !important;
      min-height: auto !important;
      margin: 0 !important;
      transform: none !important;
      width: 100%;
    }

    @media (max-width: 768px) {
      padding: 1.5rem 1rem;
    }
  `;

export const BenefitTitle = styled.h4`
    font-size: clamp(4rem, 8vw, 6rem);
    font-weight: 700;
    color: ${props => props.$theme === 'light' ? '#1E1E1E' : '#FFFFFF'};
    margin: 0 0 1rem 0;
    letter-spacing: -0.03em;
    transition: color 0.3s;
    line-height: 0.9;
    transform: scaleY(1.15) scaleX(0.95);
    transform-origin: left top;
    position: relative;
    display: inline-block;
    padding-bottom: 0.2rem;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 7px;
      background: #E06532;
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: clamp(2rem, 10vw, 3rem);
    }
  `;

export const BenefitSubtitle = styled.span`
    display: block;
    font-style: normal;
    font-size: 1.75rem;
    color: ${props => props.$theme === 'light' ? '#1E1E1E' : '#FFFFFF'};
    letter-spacing: 0.02em;
    font-weight: 800;
    text-transform: none;
    text-align: left;
    align-self: flex-start;
    margin-top: 2rem;
    margin-bottom: 0.75rem;

    @media (max-width: 768px) {
      font-size: 0.75rem;
      margin-bottom: 0.375rem;
    }
  `;

export const BenefitDescription = styled.p`
    color: ${props => props.$theme === 'light' ? '#505050' : '#D1D5DB'};
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
    font-size: 1.5rem;
    text-align: left;
    align-self: flex-start;

    @media (max-width: 768px) {
      font-size: 1.25rem;
    }
  `;

export const BenefitButton = styled.button`
  background: transparent;
  color: rgba(255, 255, 255, 0.7);
  padding: 0.6rem 1.5rem;
  border-radius: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1rem;
  margin-top: auto; 
  align-self: flex-start; 

  &:hover {
    background: white;
    color: #1D2129;
    border-color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.2);
  }
`;

export const CarouselWrapper = styled.div`
  position: relative;
  padding: 2rem 0;

  .benefits-swiper {
    padding-bottom: 4rem;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: #fde68a;
    opacity: 0.7;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }

    &::after {
      font-size: 2rem;
    }
  }

  .swiper-pagination {
    bottom: 0;
  }

  .swiper-pagination-bullet {
    background: #D1D5DB;
    opacity: 1;
    width: 10px;
    height: 10px;
    transition: all 0.3s;
  }

  .swiper-pagination-bullet-active {
    background: #A5C9FF;
    width: 30px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

export const BenefitImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;
  background: rgba(51, 65, 85, 0.3);
`;

export const BenefitImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${BenefitCard}:hover & {
    transform: scale(1.1);
  }
`;

export const BenefitContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const CTAFooterWrapper = styled.div`
  width: 100%;
  background: #1C1C1C;
  background-image: url(${footerBg});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  position: relative;
`;

export const CTASection = styled.section`
  padding: 6rem 0;
  background: transparent;
  color: #FFFFFF;
  border-top: 1px solid #374151;
  position: relative;
  overflow: hidden;

  /* Overlay para mejorar legibilidad del texto */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    z-index: 0;
  }

  /* Asegurar que el contenido esté sobre el overlay */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

export const CTAContainer = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

export const CTATitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #FFFFFF;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

export const CTASubtitle = styled.p`
  font-size: 1.5rem;
  color: #D1D5DB;
  margin-bottom: 0.5rem;
  line-height: 1.6;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const CTAActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    align-items: center;
    width: 100%;
    button {
      width: 100%;
    }
  }
`;

export const CTAButton = styled.button`
  background: #A7D3F0;
  color: #1C1C1C;
  padding: 0.875rem 2rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 4px 12px rgba(167, 211, 240, 0.25);

  &:hover {
    background: #8FC5E8;
    color: #1C1C1C;
    transform: translateX(4px);
    box-shadow: 0 6px 16px rgba(167, 211, 240, 0.35);
  }

  span {
    position: relative;
  }

  @media (max-width: 768px) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.9375rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const CTASecondaryButton = styled.button`
  background: transparent;
  color: #D1D5DB;
  padding: 0.875rem 2rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid #374151;
  cursor: pointer;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #FFFFFF;
    border-color: #9CA3AF;
    transform: translateX(4px);
  }

  @media (max-width: 768px) {
    padding: 0.8125rem 1.75rem;
    font-size: 0.9375rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.875rem;
  }
`;

export const CTANote = styled.p`
  font-size: 1.5rem;
  color: #9CA3AF;
  margin-top: 1rem;
`;

export const Footer = styled.footer`
  background: transparent;
  color: #FFFFFF;
  padding: 3rem 0;
  border-top: none;
  position: relative;

  /* Asegurar que el contenido esté sobre el overlay */
  & > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 2rem 0;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 0;
  }
`;

export const FooterContainer = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
  }
`;

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

export const FooterLogoBox = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  background: transparent;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
    transition: opacity 0.3s ease;
    filter: brightness(0) invert(1);
  }

  .logo-normal {
    opacity: 1;
  }

  .logo-hover {
    opacity: 0;
  }

  &:hover {
    transform: rotate(10deg) scale(1.1);

    
    
  }
`;

export const FooterLogoText = styled.span`
  font-size: 1.25rem;
  font-weight: 600;
  color: #FFFFFF;
  padding-top: 0.5rem;


  @media (max-width: 768px) {
    font-size: 1.125rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const FooterCopyright = styled.div`
  font-size: 1.5rem;
  color: #9CA3AF;
  font-family: 'Harvey Sans', sans-serif;
  text-align: left;

  @media (max-width: 767px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    gap: 1rem;
  }
`;

export const FooterLink = styled.a`
  font-size: 1.5rem;
  color: #D1D5DB;
  text-decoration: none;
  font-family: 'Harvey Sans', sans-serif;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: #A7D3F0;
  }
`;


const scrollAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-25%); 
`;

export const CarouselHeader = styled.div`
  text-align: center;
  width: 100vw; 
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
`;

export const CarouselHeaderContent = styled.div`
  padding: 3rem 1rem 2rem;
  max-width: 100%;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 2.5rem 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 2rem 1rem;
  }
`;

export const SectionSubtitle = styled.h3`
  font-size: clamp(2.1rem, 4.2vw, 3.15rem); 
  color: #1E1E1E; 
  font-family: 'Harvey Sans', sans-serif;
  letter-spacing: -0.01em;
  text-transform: none;
  max-width: 40ch;
  margin: 0 auto; 
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: clamp(1.5rem, 5vw, 2.2rem);
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;


export const CarouselSection = styled.section`
  min-height: auto;
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 0.5rem 0;

  -webkit-mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);
  mask-image: linear-gradient(to right, transparent, #000 10%, #000 90%, transparent);

  @media (max-width: 768px) {
    padding: 0.25rem 0;
  }
`;

export const CarouselWrapperSection = styled(CarouselSection)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start; 
  align-items: center;
  padding: 6rem 0rem; 
  -webkit-mask-image: none;
  mask-image: none;
  gap: 4rem;
  background: transparent;
  background-image: url(${carouselBg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CarouselTrack = styled.div`
  display: flex;
  gap: 3rem;
  width: max-content;
  animation: ${scrollAnimation} 40s linear infinite; 

  @media (max-width: 768px) {
    gap: 2rem;
    animation-duration: 35s; 
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    animation-duration: 30s; 
  }
`;

export const LogoCardContainer = styled.div`
  background-color: #f5f1e3;
  padding: 1.2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: flex; 
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 170px; 
  height: 220px; 
  box-sizing: border-box;

  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
`;

export const LogoCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LogoImage = styled.img`
  width: 80%; 
  height: 60%; 
  object-fit: contain;
  transition: all 0.3s ease;
  margin-bottom: 1rem; 
`;

export const LogoName = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #000000ff;
  text-align: center;
  margin: 0;
  white-space: normal;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 16px; 
  }
`;
