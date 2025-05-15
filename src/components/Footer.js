import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Study Abroad. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
