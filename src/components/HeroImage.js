// HeroImage.js
import React from 'react';
import './HeroImage.css';
import heroImage from '../images/hero.jpg';

const HeroImage = () => {
  return (
    <div className="hero-image">
      <img src={heroImage} alt="Wellness Retreat" />
      <div className="hero-content">
        <h2>Find Your Perfect Retreat</h2>
        <p>Discover a variety of wellness retreats designed for relaxation and rejuvenation.</p>
      </div>
    </div>
  );
};

export default HeroImage;