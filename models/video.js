const mongoose = require("mongoose");
const userVideoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  createdBy: {
    type: String,
  },
  playlist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UserPlaylist",
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
});
const UserVideo = mongoose.model("UserVideo", userVideoSchema);
module.exports = UserVideo;
