import React from 'react';
import './Topnavigation.css'

function Topnavigation() {
  return (
    <div className="top-nav-container">
      <div className="top-left-section">
        <div className="top-nav-container-logo">Logo</div>
        <div className="top-nav-search-container">
          <input type="text" className="top-nav-container-search-bar" placeholder="Search..." />
          <button className="search-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className="top-nav-container-right-section">
        <a href="#">Login</a>
        <span>/</span>
        <a href="#">Register</a>
      </div>
    </div>
  );
}

export default Topnavigation;