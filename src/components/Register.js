import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const API_URL = 'http://localhost:5000/api/auth/register';

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
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
                <h2 className="h3 text-center text-primary mb-4 fw-bold">Register Account</h2>

                {message && <div className={`alert ${alertClass} rounded`} role="alert">{message}</div>}

                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label fw-bold" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
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
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="user@example.com"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            className="form-control"
                            placeholder="***********"
                            required
                        />
                    </div>

                    {/* Role selector for testing */}
                    <div className="mb-3">
                        <label className="form-label fw-bold">Role</label>
                        <select
                            name="role"
                            className="form-select"
                            value={form.role}
                            onChange={handleChange}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary fw-bold">Register</button>
                    </div>
                </form>

                <p className="mt-3 text-center">
                    Already have an account?{' '}
                    <span
                        className="text-primary text-decoration-underline"
                        style={{ cursor: "pointer" }}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;