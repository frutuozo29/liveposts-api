const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    description: String,
    votes: Number
  },
  { collection: "post" }
);

module.exports = mongoose.model("Post", postSchema);