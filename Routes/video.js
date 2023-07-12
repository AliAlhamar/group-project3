const express = require("express");
const router = express.Router();
const videoController = require("../Controllers/video");

// Create a new user video
router.post("/userVideos", videoController.createUserVideo);

// Get all user videos
router.get("/userVideos", videoController.getAllUserVideos);

module.exports = router;
