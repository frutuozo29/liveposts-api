const postDomain = require("../domain/post");

module.exports.create = async (req, res, next) => {
  try {
    const post = await postDomain.create(req.body);
    res.send({ post });
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.read = async (req, res, next) => {
  try {
    let page = req.query.page || 1;
    let perPage = req.query.perpage || 10;

    const posts = await postDomain.read(page, perPage);
    res.send(posts);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.readById = async (req, res, next) => {
  try {
    const post = await postDomain.readById(req.params.id);
    res.send(post);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.update = async (req, res, next) => {
  try {
    const post = await postDomain.update(req.params.id, req.body.vote);
    res.send(post);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};