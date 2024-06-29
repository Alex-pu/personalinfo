import React from 'react';
import './hero.css';
import kamau from '../assets/images/hero.jpg'

const Hero = () => {
  return (
    <section className="hero" id="about">
      <img src={kamau} alt="KAMAU" className="hero-img" />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">About Me</h2>
        <p className="bio-text">
        I'm Alex Kamau, a passionate and enthusiastic developer fueled by an insatiable curiosity <br/> and a love for continuous learning. 
          I believe in the power of knowledge sharing <br/>and am always eager to exchange ideas, mentor others, and contribute to a collaborative environment.
        </p>
      </div>
    </section>
  );
};

export default Hero;
