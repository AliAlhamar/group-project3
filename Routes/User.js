const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/User");

// Create a new user
router.post("/auth/signup", UserController.createUser);

// Login a user
router.post("/auth/signin", UserController.loginUser);

module.exports = router;
