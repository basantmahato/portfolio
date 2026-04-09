import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import { IoHomeOutline, IoAlertCircleOutline } from 'react-icons/io5';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <IoAlertCircleOutline className="not-found-icon" />
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="not-found-button">
          <IoHomeOutline className="button-icon" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
