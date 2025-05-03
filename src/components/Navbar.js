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
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: #ffd700;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: 'Playfair Display', serif;
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
        <Logo to="/">Hotel Manas</Logo>
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