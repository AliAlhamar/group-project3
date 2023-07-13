const mongoose = require("mongoose");
const UserPlaylist = require("../models/playlist");
const jwt = require("jsonwebtoken");

// Create a new user playlist
const createUserPlaylist = async (req, res) => {
  var token = "";
  var user = {}
  var authToken = req.header("Authorization");
  if (authToken) {
    authToken = authToken.replace("Bearer ", "");
    token = authToken;
  }
  if (!authToken) {
    return res.status(400).json({ message: "no token found" });
  }
  try {
    const decoded = jwt.verify(token, "SUPERMAN");
    user = decoded.user;
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Your token is invalid" });
  }
  try {
    const { title, description } = req.body;
    const createdBy = user.id
    const videos = [];


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

const addVideo = async (req, res) => {
  var token = "";
  var user = {}
  var authToken = req.header("Authorization");
  if (authToken) {
    authToken = authToken.replace("Bearer ", "");
    token = authToken;
  }
  if (!authToken) {
    return res.status(400).json({ message: "no token found" });
  }
  try {
    const decoded = jwt.verify(token, "SUPERMAN");
    user = decoded.user;
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Your token is invalid" });
  }
  try {
    const listId = req.body.listId
    const videoUrl = req.body.videoUrl
    const playlist = await UserPlaylist.findById(listId)
    playlist.videos.push(videoUrl)
    await playlist.save()
    res.status(201).json(playlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }

}
// Get all user playlists
const getAllUserPlaylists = async (req, res) => {
  var token = "";
  var user = {}
  var authToken = req.header("Authorization");
  if (authToken) {
    authToken = authToken.replace("Bearer ", "");
    token = authToken;
  }
  if (!authToken) {
    return res.status(400).json({ message: "no token found" });
  }
  try {
    const decoded = jwt.verify(token, "SUPERMAN");
    user = decoded.user;
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Your token is invalid" });
  }
  try {
    const userPlaylists = await UserPlaylist.find({ createdBy: user.id });
    res.status(200).json(userPlaylists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createUserPlaylist, getAllUserPlaylists, addVideo };
