const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User");

// Create a new user
router.post("/users", UserController.createUser);

// Login a user
router.post("/login", UserController.loginUser);

module.exports = router;
