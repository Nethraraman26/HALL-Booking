// frontend/src/App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Home from './components/Home';
import BookingForm from './components/BookingForm';
import BookingList from './components/BookingList';

function App() {
  return (
    <Router>
      <nav style={{ padding: '1rem' }}>
        <Link to="/">Landing</Link> | <Link to="/home">Home</Link> | <Link to="/book">Book Hall</Link> | <Link to="/bookings">View Bookings</Link>
      </nav>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/book" element={<BookingForm />} />
        <Route path="/bookings" element={<BookingList />} />
      </Routes>
    </Router>
  );
}

export default App;
