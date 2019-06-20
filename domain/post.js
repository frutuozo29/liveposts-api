const mongoose = require("mongoose");
const PostModel = require("../models/post");

module.exports.create = async post => {
  try {
    let postModel = new PostModel({
      _id: new mongoose.Types.ObjectId(),
      name: post.name,
      description: post.description,
      votes: 0
    });
    const response = await postModel.save();
    return response;
  } catch { }
};

module.exports.read = async (page, perPage) => {
  try {
    const posts = await PostModel.find({})
      .skip(perPage * page - perPage)
      .limit(parseInt(perPage));

    const count = await PostModel.count();

    return { posts, count };
  } catch { }
};

module.exports.readById = async id => await PostModel.findOne({ _id: id });

module.exports.update = async (id, vote) => {
  const post = await this.readById(id)
  await PostModel.update({ _id: id }, { $set: { "votes": post.votes + vote } });
  io.emit('newVote', { id: post._id, votes: post.votes + vote })
}