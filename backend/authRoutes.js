// backend/authRoutes.js
import express from "express";
import User from "./userModel.js";

const router = express.Router();

// REGISTER
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) return res.status(400).json({ message: "All fields are required" });

  try {
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already registered" });
    
    // NOTE: This tutorial does not hash the password.
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: "Email and password required" });
  
  try {
    const user = await User.findOne({ email });
    // NOTE: This simple login check does not use bcrypt/hashing.
    if (!user || user.password !== password) return res.status(400).json({ message: "Invalid credentials" });

    res.status(200).json({ 
      message: "Login successful", 
      user: { id: user._id, username: user.username, email: user.email } 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;