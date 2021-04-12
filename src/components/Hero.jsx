import React from 'react';
import hero from '../assets/hero-background.png';
import mobile from '../assets/mobile.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text">
        <span className="hero-title">#1 Editiors Choice App of 2020</span>
        <p className="hero-main-text">Best app for your modern lifestyle</p>
        <p className="hero-text-secondary">
          Increase productivity with a simple to-do app. app for managing your
          personal budgets.
        </p>
        <div>
          <button className="btn">Try for free</button>
          <span className="hero-span">Watch demo video</span>
        </div>
      </div>
      <img src={mobile} alt="mobile" className="hero-mobile" />
      <img src={hero} alt="hero-img" className="hero-back" />
    </div>
  );
};

export default Hero;
