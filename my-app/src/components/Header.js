import React from 'react';
import logo from '../assets/logo.svg';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="site-header">
      <img src={logo} alt="Little Lemon logo" className="logo" />
      <Navigation />
    </header>
  );
}
