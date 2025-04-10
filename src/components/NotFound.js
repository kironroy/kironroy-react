import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1 className="not-found-H1">404</h1>
      <p className="not-found-p">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a className="not-found-link" href="/">
        Back to Home
      </a>
    </div>
  );
};

export default NotFound;
