import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Contact from './components/Contact';

const GlobalContainer = styled.div`
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <Router>
      <GlobalContainer>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </GlobalContainer>
    </Router>
  );
}

export default App;
