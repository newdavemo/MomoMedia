import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} MomoMedia. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
