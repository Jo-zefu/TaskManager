const express = require('express')
const {route} = require("express/lib/application");
const {adminOnly, protect} = require("../middlewaires/authMiddleware");
const {getUserById, getUsers, deleteUser} = require("../controllers/userController");
const router = express.Router()

// User Management Routes

router.get("/", protect, adminOnly, getUsers); // Get all user(Admin only)
router.get("/:id", protect, getUserById); // Get a Specific user
// router.delete("/:id", protect, adminOnly, deleteUser); // Delete user(Admin only)

module.exports = router;