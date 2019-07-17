const taskDomain = require("../domain/task");

module.exports.create = async (req, res, next) => {
  try {
    const task = await taskDomain.create(req.body);
    res.send({ task });
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.read = async (req, res, next) => {
  try {
    const tasks = await taskDomain.read();
    res.send(tasks);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.update = async (req, res, next) => {
  try {
    const task = await taskDomain.update(req.params.id, req.body.status);
    res.send(task);
  } catch (err) {
    res.status(500);
    res.send({ message: err.message });
  }
  next();
};

module.exports.del = async (req, res, next) => {
  try {
    const task = await taskDomain.del(req.params.id)
    res.send({ task })
  } catch (err) {
    res.status(500)
    res.send({ message: err.message })
  }
  next()
}