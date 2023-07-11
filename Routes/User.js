const express = require("express");
const router = express.Router();
const { createUser, loginUser } = require("../controllers/userController");

// Create a new user
router.post("/users", createUser);

// Login a user
router.post("/login", loginUser);

module.exports = router;
