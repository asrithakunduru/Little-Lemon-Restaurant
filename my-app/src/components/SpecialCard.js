import React from 'react';
import { Link } from 'react-router-dom';


export default function SpecialCard({ title, price, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <div className="card-content">
        <div className="card-title">
          <h3>{title}</h3>
          <span className="price">{price}</span>
        </div>
        <p>{description}</p>
        <Link to="/" className="order-link">Order a delivery 🚚</Link>

      </div>
    </div>
  );
}
