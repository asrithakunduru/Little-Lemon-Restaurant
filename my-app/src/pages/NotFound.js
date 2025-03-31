import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="not-found-animation">
          <div className="not-found-404">404</div>
          <div className="not-found-circle"></div>
          <div className="not-found-circle-small"></div>
        </div>
        <h1 className="not-found-title">Page Not Found</h1>
        <p className="not-found-message">
          Oops! The page you're looking for is under construction or has been moved.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="not-found-button">
            Return Home
          </Link>
        
        </div>
      </div>
    </div>
  );
}

export default NotFound;