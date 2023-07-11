const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { text, createdBy, playlist, video } = req.body;
    const comment = new Comment({
      text,
      createdBy,
      playlist,
      video,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find().populate("createdBy");
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createComment, getAllComments };
