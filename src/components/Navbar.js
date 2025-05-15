import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHome, FaUtensils, FaCalendarCheck, FaEnvelope } from 'react-icons/fa';

const Nav = styled.nav`
  background-color: rgba(26, 26, 26, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    padding: 0.8rem 1rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #ffd700;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));

  @media (max-width: 768px) {
    width: 32px;
    height: 32px;
  }
`;

const MenuOverlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(60, 60, 60, 0.7); // grey overlay
    z-index: 998;
    transition: background 0.3s;
  }
`;

const NavLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;
  

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
    backdrop-filter: blur(18px) saturate(180%);
    -webkit-backdrop-filter: blur(18px) saturate(180%);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    padding: 6rem 1.5rem 2rem;
    gap: 2rem;
    z-index: 999;
    animation: fadeInMenu 0.4s cubic-bezier(0.4,0,0.2,1);
  }

  @keyframes fadeInMenu {
    from { opacity: 0; transform: translateY(-30px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

const NavLink = styled(motion(Link))`
  color: #fff;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 1.1rem 0 1.1rem 1.5rem;
  border-radius: 22px;
  margin: 0.7rem 0;
  background: linear-gradient(120deg, rgba(30,30,30,0.85) 60%, rgba(255,215,0,0.08) 100%);
  box-shadow: 0 4px 24px 0 rgba(255, 215, 0, 0.10), 0 1.5px 8px 0 rgba(0,0,0,0.18);
  transition: 
    background 0.25s, 
    color 0.25s, 
    box-shadow 0.25s, 
    transform 0.18s;
  text-align: left;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover, &:focus {
    background: linear-gradient(90deg, #ffd700 0%, #ffed4a 100%);
    color: #222;
    box-shadow: 0 6px 32px 0 rgba(255, 215, 0, 0.22);
    transform: scale(1.05);
    outline: none;
  }

  &:active {
    background: linear-gradient(90deg, #ffed4a 0%, #ffd700 100%);
    color: #111;
    transform: scale(0.98);
  }

  @media (min-width: 769px) {
    font-size: 1.1rem;
    font-weight: 400;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    margin: 0;
    background: none;
    box-shadow: none;
    color: white;
    transition: all 0.3s ease;
    &:hover {
      color: #ffd700;
      background-color: rgba(255, 215, 0, 0.1);
      transform: none;
    }
    &:active {
      background: none;
      color: #ffd700;
      transform: none;
    }
  }

  @media (max-width: 768px) {
    background: #111;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1000;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('nav')) {
        setIsMenuOpen(false);
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoImage src="/images/manas logo.png" alt="Hotel Manas Logo" />
          Hotel Manas
        </Logo>
        <MenuButton onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? '✕' : '☰'}
        </MenuButton>
        <MenuOverlay isOpen={isMenuOpen} onClick={toggleMenu} />
        <NavLinks isOpen={isMenuOpen}>
          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            <FaHome style={{marginRight: '0.7rem'}} /> Home
          </NavLink>
          <NavLink to="/menu" onClick={() => setIsMenuOpen(false)}>
            <FaUtensils style={{marginRight: '0.7rem'}} /> Menu
          </NavLink>
          <NavLink to="/reservation" onClick={() => setIsMenuOpen(false)}>
            <FaCalendarCheck style={{marginRight: '0.7rem'}} /> Reservation
          </NavLink>
          <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
            <FaEnvelope style={{marginRight: '0.7rem'}} /> Contact
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;