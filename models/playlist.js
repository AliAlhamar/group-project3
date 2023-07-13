const mongoose = require("mongoose");
const userPlaylistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  videos: [
    {
      type: String,
      
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
const UserPlaylist = mongoose.model("UserPlaylist", userPlaylistSchema);
module.exports = UserPlaylist;
