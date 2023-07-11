const express = require("express");
const router = express.Router();
const {
  createUserPlaylist,
  getAllUserPlaylists,
} = require("../controllers/userPlaylistController");

// Create a new user playlist
router.post("/userPlaylists", createUserPlaylist);

// Get all user playlists
router.get("/userPlaylists", getAllUserPlaylists);

module.exports = router;
