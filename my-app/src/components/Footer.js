import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';


export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div>
          <img src={logo} alt="Little Lemon logo" className="footer-logo" />
        </div>
        <div>
          <h4>Navigation</h4>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/booking">Reservations</Link></li>
          <li><Link to="/order">Order Online</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>

        </div>
        <div>
          <h4>Contact</h4>
          <p>123 Main St, Chicago, IL</p>
          <p>+1 (312) 555-1234</p>
          <p>info@littlelemon.com</p>
        </div>
        <div>
          <h4>Follow Us</h4>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </div>
    </footer>
  );
}