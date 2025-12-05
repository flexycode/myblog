import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import AppNavbar from './components/AppNavbar.js';
import HomePage from './components/HomePage.js';
import About from './components/About.js';
import Services from './components/Services.js';
import Contact from './components/Contact.js';
import Login from './components/Login.js';
import Register from './components/Register.js';
import Dashboard from './components/Dashboard.js';
import Footer from './components/Footer.js';
// SESSION FUNCTIONS
function getSessionUser() {
 return sessionStorage.getItem("user");
}
function clearSessionUser() {
 sessionStorage.removeItem("user");
}
// LOGOUT COMPONENT
function Logout({ onLogout }) {
 const navigate = useNavigate();
 useEffect(() => {
 clearSessionUser();
 if (onLogout) onLogout();
 navigate('/login');
 }, [navigate, onLogout]);
 return null;
}
// PROTECTED ROUTE WRAPPER
function PrivateRoute({ children }) {
 const user = getSessionUser();
 if (!user) {
 return <Navigate to="/login" replace />;
 }
 return children;
}
export default function App() {
 const [currentUser, setCurrentUser] = useState(getSessionUser());
 function handleLogin(username) {
 setCurrentUser(username);
 }
 function handleLogout() {
 setCurrentUser(null);
 }
 return (
 <Router>
 <div className="d-flex flex-column min-vh-100">
 <AppNavbar currentUser={currentUser} />
 <Routes>
 <Route path="/" element={<HomePage />} />
 <Route path="/about" element={<About />} />
 <Route path="/services" element={<Services />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/login" element={<Login onLogin={handleLogin} />} />
 <Route path="/register" element={<Register />} />
 <Route path="/home" element={
 <PrivateRoute>
 <Dashboard />
 </PrivateRoute>
 } />
 <Route path="/logout" element={<Logout onLogout={handleLogout} />} />
 {/* fallback */}
 <Route path="*" element={<Navigate to="/" replace />} />
 </Routes>
 <Footer />
 </div>
 </Router>
 );
}
