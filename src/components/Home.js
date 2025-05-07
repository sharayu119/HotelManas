import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const HeroSection = styled(motion.div)`
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  background: #000;
`;

const HeroBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: cover;
  background-position: center;
  will-change: opacity, transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7) 0%,
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0.6) 60%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: 1;
  }
`;

const HeroContent = styled(motion.div)`
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 2;
  margin-top: -50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  font-size: 4.2rem;
  margin-bottom: 1.2rem;
  font-family: 'Playfair Display', serif;
  color: #ffd700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  font-weight: 300;
  max-width: 700px;
`;

const AnimatedButton = styled(motion(Link))`
  background-color: #ffd700;
  color: #000;
  padding: 1.2rem 2.8rem;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.2rem;
  transition: all 0.4s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  border: 2px solid transparent;

  &:hover {
    background-color: transparent;
    color: #ffd700;
    border: 2px solid #ffd700;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  }
`;

// const HighlightsSection = styled.section`
//   padding: 6rem 2rem;
//   background-color: #fff;
// `;
const HighlightsSection = styled.section`
  position: relative;
  overflow: hidden;
  padding: 100px 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/images/background.png');
    background-size: cover;
    background-position: center;
    opacity: 0.2;  /* Adjust this value to make the background more or less visible */
    z-index: -1;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 3rem;
  color: #333;
  margin-bottom: 3rem;
  font-family: 'Playfair Display', serif;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background: linear-gradient(to right, #ffd700, #ffed4a);
    margin: 1rem auto 0;
  }
`;

const HighlightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const HighlightCard = styled.div`
  text-align: center;
  padding: 2.5rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  height: 400px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  h3 {
    color: #333;
    margin: 1.5rem 0;
    font-size: 1.8rem;
    font-family: 'Playfair Display', serif;
  }

  p {
    color: #666;
    line-height: 1.6;
    font-size: 1.1rem;
  }
`;

const HighlightImage = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  border-radius: 15px;
  background-size: cover;
  background-position: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const GalleryWrapper = styled.section`
  background: url('/images/background2.jpg') center/cover no-repeat, #222;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  overflow: hidden;
  opacity:0.78;

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    z-index: 0;
    background: linear-gradient(120deg, rgba(255, 215, 0, 0.15) 0%, rgba(34, 34, 34, 0.5) 100%);
    opacity: 0.10;
    transform: scale(1.15);
    animation: zoomOutBg 18s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  @keyframes zoomOutBg {
    0% {
      transform: scale(1.15);
      opacity: 0.1;
    }
    100% {
      transform: scale(1);
      opacity: 0.15;
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }
`;

const GalleryTitle = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 2.8rem;
  color: #fff;
  margin-bottom: 0.5rem;
  text-align: center;
  letter-spacing: 2px;
  text-transform: lowercase;
`;

const GallerySubtitle = styled.p`
  color: #bbb;
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  text-align: center;
  letter-spacing: 1px;
`;

const GalleryGridNew = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.2rem;
  width: 450px;
  max-width: 150vw;
  margin: 0 auto;

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    width: 95vw;
  }
`;

const GalleryImgBox = styled.div`
  width: 130px;
  height: 130px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.18);
  transition: transform 0.2s;
  cursor: pointer;
  background-color: #333;
  &:hover {
    transform: scale(1.04);
    box-shadow: 0 6px 20px rgba(0,0,0,0.25);
  }
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;

const TestimonialsSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(135deg, #1a1a1a 0%, #333 100%);
  color: white;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 2.5rem;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  h4 {
    color:rgb(255, 166, 0);
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const SplashScreen = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: linear-gradient(120deg, 
rgb(139, 113, 16) 0%,
rgb(177, 145, 39) 25%,
rgb(230, 190, 48) 50%,
rgb(243, 211, 94) 75%,
rgb(243, 220, 135) 100%

  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(
      circle,
      rgba(255, 215, 0, 0.1) 0%,
      rgba(255, 215, 0, 0.05) 30%,
      transparent 70%
    );
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const LogoImage = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const SplashContent = styled(motion.div)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const SplashTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-family: 'Playfair Display', serif;
  margin: 0;
  padding: 0;
  background: linear-gradient(45deg, rgba(85, 56, 4, 0.84), rgb(145, 119, 28));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.15);
`;

const LoadingBar = styled(motion.div)`
  width: 200px;
  height: 4px;
  background: #f0f0f0;
  border-radius: 2px;
  overflow: hidden;
  position: relative;
`;

const LoadingProgress = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: linear-gradient(45deg, #ffd700, #ffed4a);
  width: 25%;
`;

const DecorativeDivider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  
  &::before,
  &::after {
    content: '';
    height: 1px;
    width: 60px;
    background: linear-gradient(
      to var(--direction, right),
      transparent,
      #ffd700
    );
    margin: 0 10px;
  }

  &::before {
    --direction: right;
  }

  &::after {
    --direction: left;
  }
`;

const DiamondIcon = styled.div`
  position: relative;
  width: 12px;
  height: 12px;
  transform: rotate(45deg);
  background: #ffd700;
  margin: 0 5px;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffd700;
    opacity: 0.5;
  }

  &::before {
    transform: translateX(-8px);
  }

  &::after {
    transform: translateX(8px);
  }
`;

const FadeInSection = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

const Home = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [
    '/images/dish1.jpg',
    '/images/dish2.jpg'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    heroImages.forEach(imageUrl => {
      const img = new Image();
      img.src = imageUrl;
    });
  }, []);

  useEffect(() => {
    if (!showSplash) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      }, 6000);

      return () => clearInterval(interval);
    }
  }, [showSplash, heroImages.length]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="splash"
          >
            <SplashContent>
              <LogoImage 
                src="/images/manas logo.png" 
                alt="Hotel Manas Logo"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  duration: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
              />
              <SplashTitle
                initial={{ y: -20 }}
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 1.5,
                  times: [0, 0.5, 1],
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                Hotel Manas
              </SplashTitle>
              <LoadingBar>
                <LoadingProgress
                  initial={{ x: "-100%" }}
                  animate={{ 
                    x: ["-100%", "400%"]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </LoadingBar>
            </SplashContent>
          </SplashScreen>
        ) : (
          <MainContainer
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            key="main"
          >
            <HeroSection>
              <AnimatePresence mode="sync">
                <HeroBackground
                  key={currentImageIndex}
                  style={{
                    backgroundImage: `url(${heroImages[currentImageIndex]})`,
                  }}
                  initial={{ opacity: 0, scale: 1.2 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    transition: {
                      opacity: { duration: 1.2, ease: "easeInOut" },
                      scale: { duration: 6, ease: "easeOut" }
                    }
                  }}
                  exit={{ 
                    opacity: 0,
                    transition: {
                      opacity: { duration: 1.2, ease: "easeInOut" }
                    }
                  }}
                />
              </AnimatePresence>
              <HeroContent>
                <Title
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Welcome to Hotel Manas
                </Title>
                <DecorativeDivider>
                  <DiamondIcon />
                </DecorativeDivider>
                <Subtitle
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  "Experience the finest authentic Indian cuisine, where tradition meets modern elegance."
                </Subtitle>
                <DecorativeDivider>
                  <DiamondIcon />
                </DecorativeDivider>
                <AnimatedButton
                  to="/reservation"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 150 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Table
                </AnimatedButton>
              </HeroContent>
            </HeroSection>

            <HighlightsSection style={{ color:'white'}}>
              <FadeInSection>
                <SectionTitle style={{ color: 'black' }}>Our Specialties</SectionTitle>
              </FadeInSection>
              <HighlightsGrid>
                {[
                  {
                    image: '/images/icons/chef2.jpg',
                    title: "Chef's Special",
                    description: "Daily curated menu featuring the finest seasonal ingredients and traditional recipes"
                  },
                  {
                    image: '/images/icons/maharashtrian-thali.jpg',
                    title: "Maharashtrian Thali",
                    description: "Experience the authentic flavors of Maharashtra with our specially curated thali"
                  },
                  {
                    image: 'https://img.freepik.com/premium-vector/restaurant-chef-design-with-catering-service-logo-template_486786-140.jpg?w=1380',
                    title: "Catering Services",
                    description: "Professional catering services for all your special occasions and events"
                  }
                ].map((highlight, index) => (
                  <FadeInSection key={index}>
                    <HighlightCard
                      as={motion.div}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <HighlightImage style={{ backgroundImage: `url(${highlight.image})` }} />
                      <h3>{highlight.title}</h3>
                      <p>{highlight.description}</p>
                    </HighlightCard>
                  </FadeInSection>
                ))}
              </HighlightsGrid>
            </HighlightsSection>

            <GalleryWrapper style={{color:"black"}}>
              <GalleryTitle>gallery</GalleryTitle>
              <GallerySubtitle>OF OUR RESTAURANT</GallerySubtitle>
              <GalleryGridNew>
                {[
                  '/images/gallery/dish1.jpg',
                  '/images/gallery/dish2.jpg',
                  '/images/gallery/ambiance1.jpg',
                  '/images/gallery/ambiance2.jpg',
                  '/images/gallery/dish3.jpg',
                  '/images/gallery/ambiance3.jpg',
                  '/images/gallery/dish4.jpg',
                  '/images/gallery/dish5.jpg',
                  '/images/gallery/dish6.jpg',
                ].map((img, idx) => (
                  <GalleryImgBox key={idx} style={{ backgroundImage: `url(${img})` }} />
                ))}
              </GalleryGridNew>
            </GalleryWrapper>

            <TestimonialsSection>
              <FadeInSection>
                <SectionTitle style={{ color: 'white' }}>What Our Guests Say</SectionTitle>
              </FadeInSection>
              <TestimonialsGrid>
                {[
                  {
                    text: "The best authentic Maharashtrian food I've had in Satara. The thali is a must-try!",
                    name: "Rajesh Patil",
                    role: "Food Critic"
                  },
                  {
                    text: "Excellent ambiance and impeccable service. Perfect for family gatherings and special occasions.",
                    name: "Priya Shah",
                    role: "Regular Customer"
                  },
                  {
                    text: "Their catering service for our wedding was outstanding. Guests couldn't stop praising the food!",
                    name: "Amit & Sneha",
                    role: "Wedding Celebration"
                  }
                ].map((testimonial, index) => (
                  <FadeInSection key={index}>
                    <TestimonialCard
                      as={motion.div}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <p>{testimonial.text}</p>
                      <h4>{testimonial.name}</h4>
                      <span>{testimonial.role}</span>
                    </TestimonialCard>
                  </FadeInSection>
                ))}
              </TestimonialsGrid>
            </TestimonialsSection>
          </MainContainer>
        )}
      </AnimatePresence>
    </>
  );
};

export default Home; 