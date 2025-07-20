require('dotenv').config();
const bcrypt = require("bcrypt");
const { compare } = require("bcrypt");
const { User } = require('../model/user.js');
const { createAccessToken, refreshAccessToken } = require('./token.js');

// Register
exports.register = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const newUser = new User({
            email,
            password,
        });

        await newUser.save();

        res.status(201).json({
            message: "User registered successfully.",
            user: { id: newUser._id, email: newUser.email }
        });

    } catch (error) {
        console.error("Registration Error:", error);
        res.status(500).json({ message: "Server error during registration." });
    }
};

// Login
exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required." });
    }

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const accessToken = createAccessToken(user.id);
        const refreshToken = refreshAccessToken(user.id);

        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({
            message: "Login successful",
            accessToken,
            user: {
                id: user.id,
                email: user.email,
            },
        });

    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Logout
exports.logout = async (req, res) => {
    const { refreshToken } = req.cookies;

    if (refreshToken) {
        try {
            const user = await User.findOne({ refreshToken });
            if (user) {
                user.refreshToken = "";
                await user.save();
            }
        } catch (error) {
            console.error("Logout error:", error);
        }
    }

    res.clearCookie("refreshToken", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
    });

    res.status(200).json({ message: "Logout successful" });
};
