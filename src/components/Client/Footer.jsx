import React from 'react';
import { Link } from 'react-router-dom';
import '../Client/Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="contact-details">
        <h4>Contact Details</h4>
        <p>If you have any question or need help feel free to contact our team.</p>
        <span>
          <i className="fas fa-phone" /> +977 9822944523
        </span>
        <br />
        <span>
          <i className="fas fa-envelope" /> carnepal@gmail.com
        </span>
        <br />
        <span>
          <i className="fas fa-map-marker-alt" /> Dilibazar, Kathmandu
        </span>
      </div>
      <div className="quick-links">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Used Cars</a>
          </li>
          <li>
            <a href="#">Explore New Cars</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
        </ul>
      </div>
      <div className="follow-us">
        <h4>Follow Us</h4>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in" />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-youtube" />
        </a>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Carnepal. All Rights Reserved.</p>
        <p>All content on this website, including but not limited to 
          text, images, graphics, and designs, is the exclusive property of 
          Carnepal. Unauthorized use, reproduction, or distribution of this 
          material without express written permission from Carnepal is strictly 
          prohibited. For permissions and inquiries, please contact us at 
          info@carnepal.com.</p>
      </div>
    </footer>
  );
};

export default Footer;