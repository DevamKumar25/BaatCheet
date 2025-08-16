// controllers/authController.js

import User from "../models/User.js";
import jwt from "jsonwebtoken";
import { upsertStreamUser } from "../lib/stream.js";

/**
 * Helper: Generate JWT Token
 */
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "7d",
  });
};

/**
 * @desc    User Signup
 * @route   POST /api/auth/signup
 * @access  Public
 */
export const signup = async (req, res) => {
  const { email, password, fullName } = req.body;

  try {
    // Validate required fields
    if (!email || !password || !fullName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Validate password length
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters long" });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email already exists. Please use a different one." });
    }

    // Random avatar assignment
    const avatarIndex = Math.floor(Math.random() * 100) + 1;
    const profilePic = `https://avatar.iran.liara.run/public/${avatarIndex}.png`;

    // Create user in MongoDB
    const newUser = await User.create({
      email,
      fullName,
      password, // Assuming your User model hashes the password before saving
      profilePic,
    });

    // Generate JWT token
    const token = generateToken(newUser._id);

    // Create user in Stream
    try {
      await upsertStreamUser({
        id: newUser._id.toString(), // Must be string for Stream
        name: newUser.fullName,
        image: newUser.profilePic,
      });

      console.log(`✅ Stream user created for: ${newUser.fullName}`);
    } catch (streamError) {
      console.error("❌ Error creating Stream user:", streamError.message);
    }

    // Send JWT as HTTP-only cookie
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(201).json({
      success: true,
      user: newUser,
    });
  } catch (error) {
    console.error("❌ Error in signup:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * @desc    User Login
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email" });
    }

    // Check password
    const isPasswordCorrect = await user.matchPassword(password);
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT
    const token = generateToken(user._id);

    // Send JWT as HTTP-only cookie
    res.cookie("jwt", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
    });

    return res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.error("❌ Error in login:", error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

/**
 * @desc    User Logout
 * @route   POST /api/auth/logout
 * @access  Public
 */
export const logout = (req, res) => {
  res.clearCookie("jwt");
  return res.status(200).json({
    success: true,
    message: "Logout successful",
  });
};



export async function onboard(req, res) {
  // console.log(req.user);

  try {
    const userId = req.user._id;

    const { fullName, bio, nativeLanguage, learningLanguage, location } =
      req.body;

    if (
      !fullName ||
      !bio ||
      !nativeLanguage ||
      !learningLanguage ||
      !location
    ) {
      return res.status(400).json({
        message: "All fields are required",
        missingFields: [
          !fullName && "fullName",
          !bio && "bio",
          !nativeLanguage && "nativeLangugage",
          !learningLanguage && "learningLangugage",
          !location && "location",
        ].filter(Boolean),
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        ...req.body,
        isOnboarded: true,
      },
      { new: true }
    ); // updated User

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

 // Update the user INFO in stream

    try {
      await upsertStreamUser({
        id: updatedUser._id.toString(),
        name: updatedUser.fullName,
        image: updatedUser.profilePic || "",
      });

      console.log(
        `Stream user updated after onboarding for ${updatedUser.fullName}`
      );
    } catch (streamError) {
      console.log(
        "Error updating Stream user during onboarding:",
        streamError.message
      );
    }

    res.status(200).json({ success: true, user: updatedUser });
  } catch (error) {
    console.log("Onboarding error", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
} 
