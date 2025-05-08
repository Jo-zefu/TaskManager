const Task = require("../models/Task");
const User = require("../models/User");
const bcrypt = require('bcryptjs')

// @desc    Get all users(Admin only)
// @route   GET /api/users/
// @access  Private(Admin)
const getUsers = async (req, res) => {
  try{
    const users = await User.find({role: "member"}).select("-password");

    // Add task counts for each user
    const usersWithTaskCounts = await Promise.all(
      users.map(async (user) => {
        const pendingTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: 'Pending'
        });
        const inProgressTasks = await Task.countDocuments({
          assignedTo: user._id,
          status: 'In Progress'
        });
        const completedTask = await Task.countDocuments({
          assignedTo: user._id,
          status: 'Completed'
        });
        return {
          ...user._doc, // Include all existing user data
          pendingTasks,
          inProgressTasks,
          completedTask
        };
      })
    )
    res.json(usersWithTaskCounts);
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
}

// @desc    Get user by id
// @route   GET /api/users/:id
// @access  Private
const getUserById = async (req, res) => {
  try{
    const user = await User.findById(req.params.id).select("-password");
    if (!user) res.status(404).json({message: "User not found"});
    res.json(user)
  } catch (err) {
    res.status(500).json({message: "Server error", error: err.message});
  }
}

// @desc    Delete user by id(Admin only)
// @route   DELETE /api/users/id
// @access  Private(Admin)
// const deleteUser = async (req, res) => {
//   try{
//
//   } catch (err) {
//     res.status(500).json({message: "Server error", error: err.message});
//   }
// }

module.exports = {getUsers, getUserById}