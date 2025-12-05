import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [message, setMessage] = useState('');
 const navigate = useNavigate();
 const API_URL = 'http://localhost:5000/api/auth/login';
 const handleLogin = async (e) => {
 e.preventDefault();
 setMessage('');
 try {
 const response = await fetch(API_URL, {
 method: 'POST',
 headers: { 'Content-Type': 'application/json' },
 body: JSON.stringify({ email, password }),
 });
 const data = await response.json();
 if (response.ok) {
 setMessage('Login successful! Redirecting...');
 localStorage.setItem('user', JSON.stringify(data.user));
 setTimeout(() => navigate('/dashboard'), 1500);
 } else {
 setMessage(`Error: ${data.message || 'Login failed.'}`);
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
 <h2 className="h3 text-center text-success mb-4 fw-bold">User Login</h2>
 {message && <div className={`alert ${alertClass} rounded`}
role="alert">{message}</div>}
 <form onSubmit={handleLogin}>
 <div className="mb-3">
 <label className="form-label fw-bold" htmlFor="email">Email</label>
 <input
 type="email"
 id="email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className="form-control"
 placeholder="Enter your email"
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
 placeholder="Enter your password"
 required
 />
 </div>
 <div className="d-grid mt-4">
 <button type="submit" className="btn btn-success fw-bold">Log In</button>
 </div>
 <p className="mt-3 text-center">
 Don't have an account?
 <span className="text-primary text-decoration-underline ms-1" style={{
cursor: 'pointer' }} onClick={() => navigate('/register')}>
 Register here
 </span>
 </p>
 </form>
 </div>
 </div>
 );
};
export default Login;
