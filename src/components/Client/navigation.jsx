import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/used-cars">Used Cars</Link></li>
        <li><Link to="/explore-new-cars">Explore New Cars</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/support">Support</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
