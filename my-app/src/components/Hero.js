import React from 'react';
import heroImage from '../assets/hero-image.jpg';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <button>Reserve a Table</button>
      </div>
      <div className="hero-img">
        <img src={heroImage} alt="Chef holding dish" />
      </div>
    </section>
  );
}
