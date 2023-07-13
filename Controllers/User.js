const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Create a new user
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Login a user
const loginUser = async (req, res) => {
  
    try {
      let { email, password } = req.body;
      let user = await User.findOne({ email });
      console.log(user);
      if (!user) {
        return res.status(400).json({ message: "User not found!" });
      }
      // Password Comparison
      const isMatch = await user.verfiyPasswords(password);
      if (!isMatch) {
        return res.status(400).json({ message: "Password not matched!!" });
      }
      
      // Generate JWT
      const payload = {
        user: {
          id: user._id
        },
      };
      console.log(payload);
      jwt.sign(
        payload,
       "SUPERMAN",
        { expiresIn: 36000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token }).status(200);
        }
      );
    } catch (error) {
      console.log(error);
      res.json({ message: "You are not logged In !!!" }).status(400);
    }
  };


module.exports = { createUser, loginUser };
