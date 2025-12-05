import express from "express";
import User from "./userModel.js";

const router = express.Router();

// ===== REGISTER =====
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Password validation
    if (trimmedPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    const exists = await User.findOne({ email: normalizedEmail });
    if (exists) {
      return res.status(409).json({ message: "Email already registered" });
    }

    const userRole = role || "user";
    const newUser = new User({
      username: username.trim(),
      email: normalizedEmail,
      password: trimmedPassword,
      role: userRole
    });

    await newUser.save();
    res.status(201).json({ message: `User registered successfully as ${userRole}` });
  } catch (err) {
    res.status(500).json({ error: "Registration failed", details: err.message });
  }
});

// ===== LOGIN =====
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedPassword = password.trim();

    const user = await User.findOne({ email: normalizedEmail });

    // Comparing plaintext password for testing
    if (!user || user.password !== trimmedPassword) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    res.status(500).json({ error: "Login failed", details: err.message });
  }
});

export default router;