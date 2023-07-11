const mongoose = require("mongoose");
const UserVideo = mongoose.model("UserVideo");

// Create a new user video
const createUserVideo = async (req, res) => {
  try {
    const { title, description, url, createdBy, playlist } = req.body;
    const userVideo = new UserVideo({
      title,
      description,
      url,
      createdBy,
      playlist,
    });
    await userVideo.save();
    res.status(201).json(userVideo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all user videos
const getAllUserVideos = async (req, res) => {
  try {
    const userVideos = await UserVideo.find().populate("playlist");
    res.json(userVideos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUserVideo, getAllUserVideos };
