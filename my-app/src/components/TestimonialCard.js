import React from 'react';

export default function TestimonialCard({ name, review, icon, rating }) {
  return (
    <div className="testimonial-card">
      <div className="user-icon">{icon}</div>
      <h4>{name}</h4>
      <p>{review}</p>
      <div className="stars">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</div>
    </div>
  );
}