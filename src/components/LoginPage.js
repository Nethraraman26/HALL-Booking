// frontend/src/components/LoginPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = (e) => {
    e.preventDefault();

    // TEMPORARY (you can connect this to your backend later)
    if (form.email && form.password) {
      alert('Login successful (stub)');
      navigate('/home');
    } else {
      alert('Enter email and password');
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ padding: '2rem' }}>
      <h2>Login</h2>
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required /><br />
      <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required /><br />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
