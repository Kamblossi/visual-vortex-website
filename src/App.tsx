import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import './styles.css';

function App() {
  return (
    <Router>
      <nav style={{ position: 'fixed', top: 0, width: '100%', background: 'rgba(0,0,0,0.7)', padding: '1rem', zIndex: 100, display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Home</Link>
        <Link to="/services" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Services</Link>
        <Link to="/portfolio" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Portfolio</Link>
        <Link to="/about" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>About</Link>
        <Link to="/contact" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem' }}>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
