const express = require("express");
const router = express.Router();
const userPlaylistController = require("../Controllers/playlist");

// Create a new user playlist
router.post("/playlists/create", userPlaylistController.createUserPlaylist);

// Get all user playlists
router.get("/userPlaylist", userPlaylistController.getAllUserPlaylists);

router.post("/playlist/add", userPlaylistController.addVideo);


module.exports = router;
