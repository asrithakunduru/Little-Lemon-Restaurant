import React from 'react';
import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    name: 'Sophia R.',
    review: 'Absolutely loved the food and the ambiance!',
    icon: '👩🏻',
    rating: 5,
  },
  {
    name: 'Liam K.',
    review: 'Best Mediterranean food in town.',
    icon: '🧔🏽',
    rating: 4,
  },
  {
    name: 'Olivia M.',
    review: 'Delicious desserts and great service!',
    icon: '👩🏼',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonial-container">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}