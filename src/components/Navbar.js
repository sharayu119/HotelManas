import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
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
`;

const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <Logo to="/">
          <LogoImage src="/images/manas logo.png" alt="Hotel Manas Logo" />
          Hotel Manas
        </Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/reservation">Reservation</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;