// frontend/src/components/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>Welcome to the Seminar Hall Booking System</h1>
      <p>Book seminar halls with ease. Please login or register to continue.</p>
      <Link to="/login"><button>Login</button></Link>
      <Link to="/register" style={{ marginLeft: '1rem' }}><button>Register</button></Link>
    </div>
  );
};

export default LandingPage;
