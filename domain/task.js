const mongoose = require("mongoose");
const TaskModel = require("../models/task");

module.exports.create = async task => {
  try {
    let taskModel = new TaskModel({
      _id: new mongoose.Types.ObjectId(),
      name: task.name,
      description: task.description,
      votes: 0
    });
    const response = await taskModel.save();
    return response;
  } catch { }
};

module.exports.read = async () => {
  try {
    const tasks = await TaskModel.find({})

    return { tasks };
  } catch { }
};

module.exports.update = async (id, status) => {
  await TaskModel.update({ _id: id }, { $set: { "completed": status } })
}

module.exports.del = async id => await TaskModel.findByIdAndRemove({ _id: id })