const User = require("../models/User.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Generate JWT Token
const generateToken = (userId) => {
  return jwt.sign({id: userId}, process.env.JWT_SECRET, {expiresIn: process.env.JWT_EXPIRE})
}

// @desc      Register a new user
// @route     POST /api/auth/register
// @access    Public
const registerUser = async (req, res) => {

}

// @desc      Login a new user
// @route     POST /api/auth/login
// @access    Public
const loginUser = async (req, res) => {

}

// @desc      Get user profile
// @route     GET /api/auth/profile
// @access    Private(Requires JWT)
const getUserProfile = async (req, res) => {

}

// @desc      Update user profile
// @route     PUT /api/auth/profile
// @access    Private(Requires JWT)
const updateUserProfile = async (req, res) => {

}

module.exports = {registerUser, loginUser, getUserProfile, updateUserProfile}