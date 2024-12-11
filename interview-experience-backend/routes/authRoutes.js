const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists." });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ userName, email, password: hashedPassword });
    await user.save();
    res.json({ message: "User registered successfully!" });
  } catch (err) {
    console.error("Error:", err.message);
    res.status(400).json({ error: "Error registering user." });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: "Error logging in." });
  }
});

module.exports = router;
