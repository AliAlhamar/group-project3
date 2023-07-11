const express = require("express");
const router = express.Router();
const {
  createComment,
  getAllComments,
} = require("../controllers/commentController");

// Create a new comment
router.post("/comments", createComment);

// Get all comments
router.get("/comments", getAllComments);

module.exports = router;
