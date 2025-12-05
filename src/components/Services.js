import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Register = () => {
 const [username, setUsername] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
 const navigate = useNavigate();
 const API_URL = 'http://localhost:5000/api/auth/register';
 const handleRegister = async (e) => {
 e.preventDefault();
 setMessage('');
 try {
 const response = await fetch(API_URL, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ username, email, password }),
 });
 const data = await response.json();
 if (response.ok) {
 setMessage('Registration successful! Redirecting to login...');
 setTimeout(() => navigate('/login'), 1500);
 } else {
 setMessage(`Error: ${data.message || 'Registration failed.'}`);
 }
 } catch (err) {
 console.error(err);
 setMessage('Cannot connect to server.');
 }
 };
 const alertClass = message.includes('successful') ? 'alert-success' : 'alert-danger';
 return (
 <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
 <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
 <h2 className="h3 text-center text-primary mb-4 fw-bold">Register
Account</h2>
 {message && <div className={`alert ${alertClass} rounded`}
role="alert">{message}</div>}
 <form onSubmit={handleRegister}>
 <div className="mb-3">
 <label className="form-label fw-bold"
htmlFor="username">Username</label>
 <input
 type="text"
 id="username"
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 className="form-control"
 placeholder="Your username"
 required
 />
 </div>
 <div className="mb-3">
 <label className="form-label fw-bold" htmlFor="email">Email</label>
 <input
 type="email"
 id="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="form-control"
 placeholder="user@example.com"
 required
 />
 </div>
 <div className="mb-3">
 <label className="form-label fw-bold"
htmlFor="password">Password</label>
 <input
 type="password"
 id="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 className="form-control"
 placeholder="***********"
 required
 />
 </div>
 <div className="d-grid mt-4">
 <button type="submit" className="btn btn-primary fwbold">Register</button>
 </div>
 </form>
 </div>
 </div>
 );
};
export default Register;