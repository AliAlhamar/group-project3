const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Playlist",
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
