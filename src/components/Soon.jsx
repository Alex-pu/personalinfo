import React from 'react';
import './soon.css';

const Soon = ({ onClose }) => {
  return (
    <div className="soon-overlay" onClick={onClose}>
      <div className="soon-container">
        <h2 className="soon-title">Coming soon...meanwhile get in touch!</h2>
        <p className="soon-contact">
          Email: <span className="blink-text">kamaua175@gmail.com</span> | Phone: <span className="blink-text">(254) 704-813-341</span>
        </p>
      </div>
    </div>
  );
};

export default Soon;
