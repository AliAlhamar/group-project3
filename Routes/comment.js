const express = require("express");
const router = express.Router();
const commentController = require("../Controllers/comment");

// Create a new comment
router.post("/comments", commentController.createComment);

// Get all comments
router.get("/comments", commentController.getAllComments);

module.exports = router;
