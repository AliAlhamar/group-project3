# Playlisters
# Share your youtube playlists with others.
![Hero](./frontend/playlisters/public/p3_playlists.png)
# Technologies Used:
- Youtube Api
- Google 02Auth
- Material UI
- JWT
- React + NodeJs
# Featured Functions
- Handling Google Auth
```
const handleLogin = async (req, res) => {
  const { id_token } = req.body;
  try {
    // Verify the Google ID token
    const ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    const { email } = ticket.getPayload();
    // Check if the user already exists in the database
    let user = await User.findOne({ email });
    if (user) {
      // If the user already exists, update their access token and refresh token
      user.access_token = generateAccessToken(email);
      user.refresh_token = generateRefreshToken(email);
      user = await user.save();
    } else {
      // If the user does not exist, create a new user with their email and access token
      user = await User.create({
        email,
        access_token: generateAccessToken(email),
        refresh_token: generateRefreshToken(email),
      });
    }
    res.redirect(“dashboard”);
  } catch (err) {
    console.error(err);
    res.status(500).send(“Server Error”);
  }
};
```
- Getting & Creating Playlists
```
const mongoose = require(“mongoose”);
const UserPlaylist = require(“../models/playlist”);
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
    res.status(500).json({ message: “Server Error” });
  }
};
// Get all user playlists
const getAllUserPlaylists = async (req, res) => {
  try {
    const userPlaylists = await UserPlaylist.find().populate(“videos”);
    res.json(userPlaylists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: “Server Error” });
  }
};
module.exports = { createUserPlaylist, getAllUserPlaylists };
```
[Wireframes](https://www.figma.com/file/bwu3DGN4iuSwahi8f6v4Sk/Playlisters-Whireframe?type=design&node-id=0-1&mode=design&t=g8bcoGtzx1VVjOuc-0)
[Trello](https://trello.com/b/a10jzX2L/project03)
