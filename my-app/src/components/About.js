// src/components/About.js
import React from 'react';
import founders from '../assets/marianandadrian.jpg';

export default function About() {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Adrian and Mario, lifelong friends and culinary artists, opened Little Lemon to bring a taste of the Mediterranean to Chicago. Their menu blends traditional recipes with modern flavors, crafted using locally sourced ingredients.
        </p>
      </div>
      <div className="founders">
        <img src={founders} alt="Adrian and Mario" />
      </div>
    </section>
  );
}
