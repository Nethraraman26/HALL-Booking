// frontend/src/components/RegisterPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = (e) => {
    e.preventDefault();

    // TEMPORARY (you can later connect to a real backend endpoint)
    if (form.name && form.email && form.password) {
      alert('Registration successful (stub)');
      navigate('/login');
    } else {
      alert('Please fill all fields');
    }
  };

  return (
    <form onSubmit={handleRegister} style={{ padding: '2rem' }}>
      <h2>Register</h2>
      <input name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required /><br />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
