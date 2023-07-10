const User = require("../models/User"); // your user model
const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const login = (req, res) => {
  res.render("login");
};

const dashboard = async (req, res) => {
  try {
    // req.body.userObject = {
    //   access_token: 'jqgfjqhfvbqliegufkjqviy7',
    //   refresh_token: 'jqgfjqhfvbqliegufkjqviy7refresh'
    // }
    // Check if the user already exists in the database
    const { email } = req.body.userObject;

    let user = await User.findOne({ email });

    if (user) {
      // If the user already exists, update their access token and refresh token
      // user.access_token = req.body.userObject.access_token;
      // user.refresh_token = req.body.userObject.refresh_token;
      // user = await user.save();
    } else {
      // If the user does not exist, create a new user with their email and access token
      user = await User.create({
        name: req.body.userObject.name,
        email: req.body.userObject.email,
        // access_token: req.body.userObject.access_token,
        // refresh_token: req.body.userObject.refresh_token,
      }, {timestamps: true});
    }

    // res.render("dashboard", { user });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

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
    res.redirect("dashboard");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Helper function to generate a new access token
const generateAccessToken = (email) => {
  return jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 15 });
};

// Helper function to generate a new refresh token
const generateRefreshToken = (email) => {
  return jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET);
};

module.exports = {
  login,
  dashboard,
  handleLogin,
};