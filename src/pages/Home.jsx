import React, { useEffect, useRef, useState, useContext } from "react";
import ReactPlayer from "react-player";
import { AuthContext } from "../context/AuthContext";
import lawLogo from "../assets/law.avif";
import logoBlack from "../assets/logo-black.svg";
import logoWhite from "../assets/logo-white.svg";
import { ResponsiveNavLinks, ResponsiveNavLink, ResponsiveNavButton, NavToggleButton } from "../styles/HomeNav.styled";

import car1 from "../assets/carousel/1.avif";
import car2 from "../assets/carousel/2.avif";
import car3 from "../assets/carousel/3.avif";
import car4 from "../assets/carousel/4.avif";
import car5 from "../assets/carousel/5.avif";
import car6 from "../assets/carousel/6.avif";

import {
  HomeContainer,
  GlobalHomeFonts,
  Header,
  HeaderContent,
  Nav,
  HeroLogo,
  LogoContainer,
  LogoBox,
  LogoText,
  NavLinks,
  NavLink,
  NavButton,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  HeroGrid,
  HeroLeft,
  HeroActions,
  GoogleLoginButton,
  RequestAccessButton,
  HeroRight,
  VideoPlaceholder,
  ChatInputDemo,
  ChatInputCard,
  InputLabel,
  InputWrapper,
  SearchInput,
  SearchButton,
  InputNote,
  SliderSection,
  SlidesFixed,
  SlidePanel,
  SlideBg,
  SlideContent,
  ContentInner,
  SlideImageContainer,
  SlideTextContainer,
  StepNumber,
  SlideTitle,
  SlideDescription,
  ParallaxNav,
  NavDot,
  DotCircle,
  BenefitsSection,
  BenefitsContainer,
  BenefitsHeader,
  BenefitsTitle,
  BenefitsItalic,
  BenefitsSubtitle,
  BenefitsGrid,
  BenefitCard,
  BenefitImageContainer,
  BenefitImage,
  BenefitContent,
  BenefitTitle,
  BenefitSubtitle as BenefitCardSubtitle,
  BenefitDescription,
  BenefitButton,
  CTASection,
  CTAContainer,
  CTATitle,
  CTASubtitle,
  CTAActionsContainer,
  CTAButton,
  CTASecondaryButton,
  CTANote,
  Footer,
  FooterContainer,
  FooterContent,
  FooterLogoContainer,
  FooterLogo,
  FooterLogoBox,
  FooterLogoText,
  FooterCopyright,
  FooterLinks,
  FooterLink,
  CarouselHeader,
  CarouselHeaderContent,
  SectionSubtitle,
  CarouselSection,
  CarouselWrapperSection,
  CarouselTrack,
  LogoCardContainer,
  LogoCard,
  LogoImage,
  LogoName,
  HeroMainSection,
  HeroMainContent,
  HeroMainTitle,
  HeroMainSubtitle,
  HeroMainActions,
  VideoDemoSection,
  VideoWrapper,
  VideoContainer,
  VideoInner,
  VideoTitle,
  VideoDescription,
  CTAFooterWrapper,

} from "../styles/Home.styled";

export const Home = () => {
  const { loginWithGoogle } = useContext(AuthContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  const containerRef = useRef(null);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollCooldown = useRef(false);
  const scrollThreshold = 100;
  const videoContainerRef = useRef(null);

  const [isVideoExpanded, setIsVideoExpanded] = useState(false);

  const slides = [
    {
      gradient: "#1E1E1E",
      stepNumber: "01",
      title: "Expresa tu consulta",
      subtitle: "con naturalidad",
      description:
        "Comparte tu situación legal con la confianza de hablar con un experto. BÚHO comprende las complejidades del sistema jurídico boliviano y adapta su respuesta a tu contexto específico.",
      reverse: false,
      isDark: true,
    },
    {
      gradient: "#E5E7EB",
      stepNumber: "02",
      title: "Recibe análisis",
      subtitle: "jurídico integral",
      description:
        "Obtén una respuesta completa que integra normativa vigente, precedentes jurisprudenciales relevantes y criterios interpretativos actualizados, todo estructurado de manera clara y profesional.",
      reverse: true,
      isDark: false,
    },
    {
      gradient: "#F1F3F5",
      stepNumber: "03",
      title: "Profundiza con",
      subtitle: "precisión estratégica",
      description:
        "Solicita análisis específicos, explora precedentes alternativos o requiere documentación complementaria. BÚHO mantiene el contexto de tu consulta para ofrecer respuestas cada vez más refinadas.",
      reverse: false,
      isDark: false,
    },
  ];

  const benefits = [
    {
      title: "80%",
      subtitle: "Reducción en tiempo de revisión",
      description: "Lo que toma 92 minutos revisar manualmente, BÚHO lo analiza en 26 segundos. Automatiza el análisis de documentos legales con precisión y velocidad sin precedentes.",
      theme: "dark"
    },
    {
      title: "260 HORAS",
      subtitle: "Recuperadas al año",
      description: "Equivalentes a 32.5 días laborales completos que puedes dedicar a casos de mayor valor.",
      theme: "light"
    },
    {
      title: "200 HORAS",
      subtitle: "Facturables adicionales",
      description: "4 horas semanales liberadas que puedes convertir en ingresos o balance vida-trabajo.",
      theme: "light"
    },
    {
      title: "24/7",
      subtitle: "Disponibilidad total",
      description: "Asesoría jurídica especializada sin horarios, sin descansos, sin esperas. Respuestas instantáneas para tus consultas legales más complejas, cualquier día del año.",
      theme: "light"
    }
  ];

  useEffect(() => {
    if (videoContainerRef.current) {
      const width = videoContainerRef.current.offsetWidth;
      const height = videoContainerRef.current.offsetHeight;
      console.log(`Video container dimensions: ${width}x${height}`);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const text = "Explícame la presunción de inocencia en Bolivia";
    let currentIdx = 0;

    const typeText = () => {
      if (currentIdx < text.length) {
        setPlaceholder(text.substring(0, currentIdx + 1));
        currentIdx++;
        setTimeout(typeText, 35);
      } else {
        setTimeout(() => {
          currentIdx = 0;
          setPlaceholder("");
          setTimeout(typeText, 500);
        }, 3000);
      }
    };

    const timeout = setTimeout(typeText, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex || index < 0 || index >= slides.length) return;

    setIsAnimating(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  useEffect(() => {
    const handleWheel = (e) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const isSliderInView = rect.top <= 100 && rect.bottom >= window.innerHeight - 100;

      if (!isSliderInView) return;

      if ((currentIndex === 0 && e.deltaY < 0) || (currentIndex === slides.length - 1 && e.deltaY > 0)) {
        return;
      }

      if (isAnimating) {
        e.preventDefault();
        return;
      }

      e.preventDefault();

      const currentTime = Date.now();
      const deltaY = e.deltaY;

      if (currentTime - lastScrollTime.current > 150) {
        scrollAccumulator.current = 0;
      }

      lastScrollTime.current = currentTime;
      scrollAccumulator.current += Math.abs(deltaY);

      if (scrollAccumulator.current >= scrollThreshold) {
        scrollAccumulator.current = 0;

        if (!scrollCooldown.current) {
          scrollCooldown.current = true;
          setTimeout(() => {
            scrollCooldown.current = false;
          }, 800);

          if (deltaY > 0) {
            goToSlide(currentIndex + 1);
          } else {
            goToSlide(currentIndex - 1);
          }
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, isAnimating, slides.length]);

  // Intersection observer for nav visibility
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setNavVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Auto-snap scroll: centra la sección cuando el usuario se acerca
  useEffect(() => {
    let isSnapping = false;
    let snapTimeout = null;

    const handleScroll = () => {
      if (!containerRef.current || isAnimating || isSnapping) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Detectar si estamos cerca de la sección (dentro de 150px del borde superior o inferior)
      const distanceFromTop = Math.abs(rect.top);
      const distanceFromBottom = Math.abs(rect.bottom - viewportHeight);

      // Si la sección está parcialmente visible y cerca del viewport
      const isNearSection = rect.top < viewportHeight * 0.3 && rect.top > -viewportHeight * 0.3;
      const isPartiallyVisible = rect.top < viewportHeight && rect.bottom > 0;

      // Si estamos cerca pero no perfectamente centrados
      if (isNearSection && isPartiallyVisible && Math.abs(rect.top) > 5) {
        // Limpiar timeout anterior
        if (snapTimeout) clearTimeout(snapTimeout);

        // Esperar un momento para detectar si el usuario dejó de hacer scroll
        snapTimeout = setTimeout(() => {
          if (!containerRef.current) return;

          const currentRect = containerRef.current.getBoundingClientRect();
          // Verificar nuevamente que estamos cerca
          if (Math.abs(currentRect.top) > 5 && Math.abs(currentRect.top) < viewportHeight * 0.4) {
            isSnapping = true;

            // Hacer scroll suave para centrar la sección
            containerRef.current.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });

            // Resetear el estado de snapping después de la animación
            setTimeout(() => {
              isSnapping = false;
            }, 500);
          }
        }, 150); // Esperar 150ms después de que el usuario deje de hacer scroll
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (snapTimeout) clearTimeout(snapTimeout);
    };
  }, [isAnimating]);
  const toggleVideoExpanded = () => {
    setIsVideoExpanded(!isVideoExpanded);
  };

  return (
    <HomeContainer>
      <GlobalHomeFonts />
      {/* Header con props para visibilidad y scroll */}
      <Header $isVisible={isHeaderVisible}>
        <HeaderContent $isScrolled={isScrolled}>
          <Nav>
            <LogoContainer>
              <LogoBox>
                <img src={logoBlack} alt="Logo Búho blanco" className="logo-normal" />
                <img src={logoWhite} alt="Logo Búho negro" className="logo-hover" />
              </LogoBox>
              <LogoText>BÚHO</LogoText>
            </LogoContainer>
            <NavToggleButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? '✕' : '☰'}
            </NavToggleButton>
            <ResponsiveNavLinks $isOpen={isMobileMenuOpen}>
              <ResponsiveNavLink href="#beneficios" onClick={() => setIsMobileMenuOpen(false)}>Beneficios</ResponsiveNavLink>
              <ResponsiveNavLink href="#guia" onClick={() => setIsMobileMenuOpen(false)}>Guía de uso</ResponsiveNavLink>
              <ResponsiveNavButton onClick={() => setIsMobileMenuOpen(false)}>Contáctanos</ResponsiveNavButton>
            </ResponsiveNavLinks>
          </Nav>
        </HeaderContent>
      </Header>

      {/* Nueva Sección 1 - Hero Principal */}
      <HeroMainSection>
        <HeroMainContent>
          <HeroLogo src={lawLogo} alt="Law Logo" />
          <HeroMainTitle>
            Elimina la <span className="underline">burocracia</span>
            <br />
            de tu escritorio.
          </HeroMainTitle>

          <HeroMainSubtitle>
            La IA jurídica que ordena, analiza y transforma tu trabajo
            legal con precisión boliviana en tiempo real.
          </HeroMainSubtitle>

          <HeroMainActions>
            <GoogleLoginButton onClick={loginWithGoogle}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Inicia Sesion con Google
            </GoogleLoginButton>

            <RequestAccessButton>
              Solicitar acceso
            </RequestAccessButton>
          </HeroMainActions>
        </HeroMainContent>
      </HeroMainSection>
      {/* Nueva Sección 2 - Video Demo */}
      <VideoDemoSection>
        <VideoWrapper>
          <VideoTitle>Así funciona BÚHO en la vida real.</VideoTitle>
          <VideoContainer $isExpanded={isVideoExpanded} ref={videoContainerRef}>
            <VideoInner $isExpanded={isVideoExpanded}>
              <iframe
                width="100%"
                height="100%"
                src={import.meta.env.VITE_VIDEO_DEMO_URL}
                title={import.meta.env.VITE_VIDEO_DEMO_TITLE}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{
                  border: 'none',
                  display: 'block'
                }}
              />
            </VideoInner>
          </VideoContainer>

          <VideoDescription>
            Nuestra IA jurídica analiza y organiza automáticamente tus casos y documentos, proporcionando respuestas precisas basadas en la normativa y jurisprudencia boliviana, transformando tu flujo de trabajo legal.
          </VideoDescription>
        </VideoWrapper>
      </VideoDemoSection>

      {/* Logo Carousel */}
      <CarouselWrapperSection>
        <CarouselHeader>
          <CarouselHeaderContent>
            <SectionSubtitle>
              BÚHO está diseñado para quienes hacen que el Derecho avance.
            </SectionSubtitle>
          </CarouselHeaderContent>
        </CarouselHeader>
        <CarouselTrack>
          {/* Múltiples copias para loop infinito suave */}
          {Array(4).fill(null).map((_, setIndex) => (
            <React.Fragment key={`set-${setIndex}`}>
              {[
                { name: 'Clientes', image: car1 },
                { name: 'Estudiantes', image: car2 },
                { name: 'Docencia', image: car3 },
                { name: 'Equipos Juridicos', image: car4 },
                { name: 'Investigadores', image: car5 },
                { name: 'Profesionales', image: car6 },
              ].map((logo, index) => (
                <LogoCard key={`logo-${setIndex}-${index}`}>
                  <LogoCardContainer>
                    <LogoImage src={logo.image} alt={logo.name} />
                    <LogoName>{logo.name}</LogoName>
                  </LogoCardContainer>
                </LogoCard>
              ))}
            </React.Fragment>
          ))}
        </CarouselTrack>
      </CarouselWrapperSection>

      {/* Slider Section */}
      <div style={{ overflowX: 'hidden' }}> {/* Contenedor para el overflow */}
        <SliderSection id="guia" ref={containerRef}>
          <SlidesFixed>
            {slides.map((slide, index) => {
              return (
                <SlidePanel
                  key={index}
                  $zIndex={index === currentIndex ? slides.length : slides.length - Math.abs(index - currentIndex)}
                  $isActive={index === currentIndex}
                  $bgIndex={index}
                >
                  <SlideBg $gradient={slide.gradient} $slideIndex={index} />
                  <SlideContent $isDark={slide.isDark}>
                    <ContentInner $reverse={slide.reverse}>
                      <SlideImageContainer $slideIndex={index}>
                      </SlideImageContainer>
                      <SlideTextContainer $slideIndex={index}>
                        <StepNumber $slideIndex={index}>{slide.stepNumber}</StepNumber>
                        <SlideTitle $slideIndex={index}>
                          {slide.title}
                          {slide.subtitle && (
                            <>
                              <br />
                              <span className="subtitle">{slide.subtitle}</span>
                            </>
                          )}
                        </SlideTitle>
                        <SlideDescription $slideIndex={index}>{slide.description}</SlideDescription>
                      </SlideTextContainer>
                    </ContentInner>
                  </SlideContent>
                </SlidePanel>
              );
            })}
          </SlidesFixed>
        </SliderSection>
      </div>

      {/* Navigation Dots */}
      <ParallaxNav $visible={navVisible}>
        {slides.map((_, index) => (
          <NavDot key={index} onClick={() => goToSlide(index)}>
            <DotCircle $active={currentIndex === index} />
          </NavDot>
        ))}
      </ParallaxNav>

      {/* Benefits Section */}
      <BenefitsSection id="beneficios">
        <BenefitsContainer>
          <BenefitsHeader>
            <BenefitsTitle>
              LA EXCELENCIA EN<br />
              <BenefitsItalic>ASESORÍA JURÍDICA</BenefitsItalic>
            </BenefitsTitle>
            <BenefitsSubtitle>
              Donde la precisión legal se encuentra con la innovación tecnológica
            </BenefitsSubtitle>
          </BenefitsHeader>

          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} $gridArea={`card-${index + 1}`} $theme={benefit.theme}>
                <BenefitContent>
                  <BenefitTitle $theme={benefit.theme}>{benefit.title}</BenefitTitle>
                  <BenefitCardSubtitle $theme={benefit.theme}>{benefit.subtitle}</BenefitCardSubtitle>
                  <BenefitDescription $theme={benefit.theme}>{benefit.description}</BenefitDescription>
                </BenefitContent>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsContainer>
      </BenefitsSection>

      {/* CTA + Footer con fondo continuo */}
      <CTAFooterWrapper>
        {/* CTA Section */}
        <CTASection>
          <CTAContainer>
            <CTATitle>¿Quieres ver una demostración?</CTATitle>
            <CTASubtitle>
              Prueba BÚHO gratis y descubre cómo la IA puede transformar tu trabajo legal. O únete a nuestro equipo y ayúdanos a construir el futuro de la práctica jurídica en Bolivia.
            </CTASubtitle>
            <CTASubtitle style={{ fontStyle: 'italic', marginTop: '1rem' }}>
              Tú eliges cómo ser parte de esta revolución.
            </CTASubtitle>
            <CTAActionsContainer>
              <CTAButton><span>Reservar una demostración →</span></CTAButton>
              <CTASecondaryButton>
                Quiero unirme al equipo de BÚHO
              </CTASecondaryButton>
            </CTAActionsContainer>
          </CTAContainer>
        </CTASection>

        {/* Footer */}
        <Footer>
          <FooterContainer>
            <FooterContent>
              <FooterLogoContainer>
                <FooterLogo>
                  <FooterLogoBox>
                    <img src={logoBlack} alt="Logo Búho" className="logo-normal" />
                    <img src={logoWhite} alt="Logo Búho hover" className="logo-hover" />
                  </FooterLogoBox>
                  <FooterLogoText>BÚHO</FooterLogoText>
                </FooterLogo>
                <FooterCopyright>
                  © 2025 BÚHO. Todos los derechos reservados.
                </FooterCopyright>
              </FooterLogoContainer>
              <FooterLinks>
                <FooterLink>X</FooterLink> | <FooterLink>Instagram</FooterLink> | <FooterLink>Youtube</FooterLink> | <FooterLink>LinkedIn</FooterLink>
              </FooterLinks>
            </FooterContent>
          </FooterContainer>
        </Footer>
      </CTAFooterWrapper>
    </HomeContainer>
  );
};