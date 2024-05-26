const express = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/register', async (req, res) => {
    const { firstName, lastName, email, phone, password, userType } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            firstName, lastName, email, phone, password: hashedPassword, userType
        });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ _id: user._id }, 'your_jwt_secret');
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
