const express = require("express");
const router = express.Router();
const userPlaylistController = require("../Controllers/playlist");

// Create a new user playlist
router.post("/userPlaylists", userPlaylistController.createUserPlaylist);

// Get all user playlists
router.get("/userPlaylists", userPlaylistController.getAllUserPlaylists);

module.exports = router;
