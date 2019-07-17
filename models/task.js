const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    completed: { type: Boolean, default: false }
  },
  { collection: "task" }
);

module.exports = mongoose.model("Task", taskSchema);