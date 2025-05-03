import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const HeroSection = styled.div`
  height: 100vh;
  background: url('/images/logo2.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;

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
  }
`;

const HeroContent = styled.div`
  max-width: 800px;
  padding: 2rem;
  position: relative;
  z-index: 2;
  margin-top: -50px;
  animation: fadeIn 1.2s ease-out;
  display: flex;
  flex-direction: column;
  align-items: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Logo = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  margin-bottom: 2rem;
  border: 3px solid #ffd700;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  animation: logoFadeIn 1.5s ease-out;

  @keyframes logoFadeIn {
    from {
      opacity: 0;
      transform: scale(0.8) translateY(-20px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;

const Title = styled.h1`
  font-size: 3.8rem;
  margin-bottom: 1.2rem;
  font-family: 'Playfair Display', serif;
  color: #ffd700;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.5);
  letter-spacing: 1px;
`;

const Subtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  color: #ffffff;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
  line-height: 1.5;
  font-weight: 300;
  max-width: 700px;
`;

const Button = styled(Link)`
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

const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2.5rem;
  background-color: #f9f9f9;
  border-radius: 15px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

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

const Home = () => {
  return (
    <MainContainer>
      <HeroSection>
        <HeroContent>
          
          <Title>Welcome to Manas Satara</Title>
          <Subtitle>Experience authentic Indian cuisine crafted with passion and tradition</Subtitle>
          <Button to="/reservation">Book Your Table</Button>
        </HeroContent>
      </HeroSection>

      <FeaturesSection>
        <FeaturesGrid>
          <FeatureCard>
            <h3>Traditional Recipes</h3>
            <p>Savor the authentic flavors of India with our carefully curated family recipes passed down through generations</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Elegant Ambiance</h3>
            <p>Immerse yourself in our sophisticated dining atmosphere perfect for memorable gatherings and special occasions</p>
          </FeatureCard>
          <FeatureCard>
            <h3>Expert Chefs</h3>
            <p>Our master chefs bring decades of culinary expertise to create an unforgettable dining experience</p>
          </FeatureCard>
        </FeaturesGrid>
      </FeaturesSection>
    </MainContainer>
  );
};

export default Home; 