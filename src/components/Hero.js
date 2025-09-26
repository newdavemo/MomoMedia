import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Short-form content. Long-term impact.</h1>
        <p className="hero-subtext">
          We edit, repurpose, and amplify your voice—so you can focus on creating.
        </p>
        <a href="#contact" className="cta-button">Start Your First Edit Free</a>
      </div>
    </section>
  );
}

export default Hero;
