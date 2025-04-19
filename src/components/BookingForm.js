// frontend/src/components/BookingForm.js
import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    hall: '',
    date: '',
    timeSlot: '',
    purpose: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/bookings', form);
      alert('Booking successful!');
      setForm({ name: '', email: '', hall: '', date: '', timeSlot: '', purpose: '' });
    } catch (err) {
      alert('Error booking hall');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book a Seminar Hall</h2>
      <input name="name" placeholder="Your Name" value={form.name} onChange={handleChange} required /><br />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
      <input name="hall" placeholder="Hall Name" value={form.hall} onChange={handleChange} required /><br />
      <input name="date" type="date" value={form.date} onChange={handleChange} required /><br />
      <input name="timeSlot" placeholder="Time Slot" value={form.timeSlot} onChange={handleChange} required /><br />
      <textarea name="purpose" placeholder="Purpose" value={form.purpose} onChange={handleChange} required /><br />
      <button type="submit">Submit Booking</button>
    </form>
  );
};

export default BookingForm;
