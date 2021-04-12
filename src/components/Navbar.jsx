import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="navbar-brand">
        <span className="navbar-title">App</span>
        <span className="navbar-title2">Lab</span>
      </span>
      <ul className="navbar-links">
        <li>Home</li>
        <li>Key features</li>
        <li>Pricing</li>
        <li>Testimonial</li>
        <li>FAQ</li>
        <button className="btn navbar-btn">Try for free</button>
      </ul>
    </div>
  );
};

export default Navbar;
