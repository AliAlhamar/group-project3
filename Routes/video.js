const express = require("express");
const router = express.Router();
const {
  createUserVideo,
  getAllUserVideos,
} = require("../controllers/userVideoController");

// Create a new user video
router.post("/userVideos", createUserVideo);

// Get all user videos
router.get("/userVideos", getAllUserVideos);

module.exports = router;
