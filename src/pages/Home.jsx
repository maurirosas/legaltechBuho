import React, { useEffect, useRef, useState } from "react";
import {
  HomeContainer,
  GlobalHomeFonts,
  Header,
  HeaderContent,
  Nav,
  LogoContainer,
  LogoBox,
  LogoText,
  NavLinks,
  NavLink,
  NavButton,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
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
  BenefitsSubtitle,
  BenefitsGrid,
  BenefitCard,
  BenefitTitle,
  BenefitDescription,
  CTASection,
  CTAContainer,
  CTATitle,
  CTASubtitle,
  CTAButton,
  CTANote,
  Footer,
  FooterContainer,
  FooterContent,
  FooterLogo,
  FooterLogoBox,
  FooterLogoText,
  FooterCopyright,
} from "../styles/Home.styled";

export const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [placeholder, setPlaceholder] = useState("");

  const containerRef = useRef(null);
  const scrollAccumulator = useRef(0);
  const lastScrollTime = useRef(0);
  const scrollCooldown = useRef(false);
  const scrollThreshold = 100;

  const slides = [
    {
      gradient: "#1D2129",
      stepNumber: "01",
      title: "Expresa tu consulta",
      subtitle: "con naturalidad",
      description:
        "Comparte tu situación legal con la confianza de hablar con un experto. BÚHO comprende las complejidades del sistema jurídico boliviano y adapta su respuesta a tu contexto específico.",
      reverse: false,
      isDark: true,
    },
    {
      gradient: "#2A2E35",
      stepNumber: "02",
      title: "Recibe análisis",
      subtitle: "jurídico integral",
      description:
        "Obtén una respuesta completa que integra normativa vigente, precedentes jurisprudenciales relevantes y criterios interpretativos actualizados, todo estructurado de manera clara y profesional.",
      reverse: true,
      isDark: true,
    },
    {
      gradient: "#1D2129",
      stepNumber: "03",
      title: "Profundiza con",
      subtitle: "precisión estratégica",
      description:
        "Solicita análisis específicos, explora precedentes alternativos o requiere documentación complementaria. BÚHO mantiene el contexto de tu consulta para ofrecer respuestas cada vez más refinadas.",
      reverse: false,
      isDark: true,
    },
  ];

  const benefits = [
    {
      title: "BIBLIOTECA JURÍDICA",
      subtitle: "sin límites",
      description:
        "Acceso inmediato a la más completa base de datos jurídica boliviana. Normativa vigente, precedentes del TSJ y TCP, criterios especializados de ASFI y jurisprudencia actualizada al instante.",
    },
    {
      title: "RESPUESTA INMEDIATA",
      subtitle: "análisis integral",
      description:
        "Transforme horas de investigación en segundos de certeza jurídica. Análisis comprehensivo que integra múltiples fuentes legales con la precisión que su práctica profesional exige.",
    },
    {
      title: "ESPECIALIZACIÓN NATIVA",
      subtitle: "contexto boliviano",
      description:
        "Diseñado exclusivamente para el sistema jurídico boliviano. Comprende las particularidades locales, precedentes específicos y matices interpretativos únicos de nuestra legislación.",
    },
    {
      title: "VERSATILIDAD PROFESIONAL",
      subtitle: "toda práctica legal",
      description:
        "Desde consultas puntuales hasta análisis complejos multidisciplinarios. El compañero ideal para abogados independientes, estudios jurídicos y departamentos legales corporativos.",
    },
    {
      title: "CONFIDENCIALIDAD ABSOLUTA",
      subtitle: "privacidad garantizada",
      description:
        "Sus consultas permanecen estrictamente confidenciales. Sin almacenamiento de datos sensibles, respetando el más alto estándar de secreto profesional que su práctica requiere.",
    },
    {
      title: "DISPONIBILIDAD PERPETUA",
      subtitle: "asesoría sin horarios",
      description:
        "Asesoría jurídica de élite disponible las 24 horas del día. Accesible desde cualquier dispositivo, en cualquier momento que la excelencia legal sea requerida.",
    },
  ];

  // Typing animation effect
  useEffect(() => {
    const text = "Explicame la presunción de inocencia en Bolivia";
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

  // Slider logic
  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex || index < 0 || index >= slides.length) return;

    setIsAnimating(true);
    setCurrentIndex(index);

    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  // Wheel event handler
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
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <HomeContainer>
      <GlobalHomeFonts />
      {/* Header */}
      <Header>
        <HeaderContent>
          <Nav>
            <LogoContainer>
              <LogoBox>
                <span>🦉</span>
              </LogoBox>
              <LogoText>BÚHO</LogoText>
            </LogoContainer>
            <NavLinks>
              <NavLink href="#beneficios">Beneficios</NavLink>
              <NavLink href="#guia">Guía de uso</NavLink>
              <NavButton>Contáctanos</NavButton>
            </NavLinks>
          </Nav>
        </HeaderContent>
      </Header>

      {/* Hero Section */}
      <HeroSection>
        <HeroTitle>
          TRANSFORMA TU PRÁCTICA LEGAL CON INTELIGENCIA ARTIFICIAL
        </HeroTitle>
        <HeroSubtitle>
          Normativa, jurisprudencia y criterios aplicables en una sola respuesta.
        </HeroSubtitle>

        <ChatInputDemo>
          <ChatInputCard>
            <InputLabel>Escribe tu consulta legal</InputLabel>
            <InputWrapper>
              <SearchInput type="text" placeholder={placeholder} />
              <SearchButton>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </SearchButton>
            </InputWrapper>
            <InputNote>
              Nota
            </InputNote>
          </ChatInputCard>
        </ChatInputDemo>
      </HeroSection>

      {/* Slider Section */}
      <SliderSection id="guia" ref={containerRef}>
        <SlidesFixed>
          {slides.map((slide, index) => {
            const direction = index < currentIndex ? -100 : 0;
            return (
              <SlidePanel
                key={index}
                $zIndex={slides.length - index}
                $translateY={`${direction}vh`}
              >
                <SlideBg $gradient={slide.gradient} />
                <SlideContent $isDark={slide.isDark}>
                  <ContentInner $reverse={slide.reverse}>
                    <SlideImageContainer $isDark={slide.isDark}>
                    </SlideImageContainer>
                    <SlideTextContainer>
                      <StepNumber $isDark={slide.isDark}>{slide.stepNumber}</StepNumber>
                      <SlideTitle $isDark={slide.isDark}>
                        {slide.title}
                        {slide.subtitle && (
                          <>
                            <br />
                            <span className="subtitle">{slide.subtitle}</span>
                          </>
                        )}
                      </SlideTitle>
                      <SlideDescription $isDark={slide.isDark}>{slide.description}</SlideDescription>
                    </SlideTextContainer>
                  </ContentInner>
                </SlideContent>
              </SlidePanel>
            );
          })}
        </SlidesFixed>
      </SliderSection>

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
              LA EXCELENCIA EN
              <br />
              <span className="italic">ASESORÍA JURÍDICA</span>
            </BenefitsTitle>
            <BenefitsSubtitle>
              Donde la precisión legal se encuentra con la innovación tecnológica
            </BenefitsSubtitle>
          </BenefitsHeader>

          <BenefitsGrid>
            {benefits.map((benefit, index) => (
              <BenefitCard key={index}>
                <BenefitTitle>
                  {benefit.title}
                  <br />
                  <span className="subtitle">{benefit.subtitle}</span>
                </BenefitTitle>
                <BenefitDescription>{benefit.description}</BenefitDescription>
              </BenefitCard>
            ))}
          </BenefitsGrid>
        </BenefitsContainer>
      </BenefitsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <CTATitle>¿Listo para transformar tu práctica legal?</CTATitle>
          <CTASubtitle>
            Únete a los profesionales que ya están usando BÚHO para optimizar su trabajo.
          </CTASubtitle>
          <CTAButton><span>Solicitar acceso ahora</span></CTAButton>
          <CTANote>Prueba gratuita disponible • Sin compromiso inicial</CTANote>
        </CTAContainer>
      </CTASection>

      {/* Footer */}
      <Footer>
        <FooterContainer>
          <FooterContent>
            <FooterLogo>
              <FooterLogoBox>
                <span>🦉</span>
              </FooterLogoBox>
              <FooterLogoText>BÚHO</FooterLogoText>
            </FooterLogo>
            <FooterCopyright>
              © 2025 BÚHO. Inteligencia artificial para el derecho boliviano.
            </FooterCopyright>
          </FooterContent>
        </FooterContainer>
      </Footer>
    </HomeContainer>
  );
};
