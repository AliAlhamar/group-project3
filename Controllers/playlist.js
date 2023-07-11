const mongoose = require("mongoose");
const UserPlaylist = mongoose.model("UserPlaylist");

// Create a new user playlist
const createUserPlaylist = async (req, res) => {
  try {
    const { title, description, videos, createdBy } = req.body;
    const userPlaylist = new UserPlaylist({
      title,
      description,
      videos,
      createdBy,
    });
    await userPlaylist.save();
    res.status(201).json(userPlaylist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all user playlists
const getAllUserPlaylists = async (req, res) => {
  try {
    const userPlaylists = await UserPlaylist.find().populate("videos");
    res.json(userPlaylists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUserPlaylist, getAllUserPlaylists };
