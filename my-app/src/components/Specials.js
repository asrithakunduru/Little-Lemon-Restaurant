import React from 'react';
import SpecialCard from './SpecialCard';
import greekSalad from '../assets/greek-salad.jpg';
import bruschetta from '../assets/bruschetta.svg';
import lemonDessert from '../assets/lemon-dessert.jpg';

const specials = [
  {
    title: 'Greek Salad',
    price: '$12.99',
    description: 'The famous greek salad with lettuce, olives and feta cheese.',
    image: greekSalad,
  },
  {
    title: 'Bruschetta',
    price: '$5.99',
    description: 'Grilled bread with garlic and olive oil.',
    image: bruschetta,
  },
  {
    title: 'Lemon Dessert',
    price: '$5.00',
    description: 'Authentic recipe from grandma’s book.',
    image: lemonDessert,
  },
];

export default function Specials() {
  return (
    <section className="specials">
      <div className="specials-header">
        <h2>This week’s specials!</h2>
        <button className="menu-btn">Online Menu</button>
      </div>
      <div className="card-container">
        {specials.map((item, index) => (
          <SpecialCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
