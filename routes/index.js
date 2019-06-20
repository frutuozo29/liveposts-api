const posts = require("./post");

module.exports.assignRoutes = server => {
  server.get("/", (req, res, next) => {
    res.status(200);
    res.json({ env: process.env.NODE_ENV });
    next();
  });

  posts(server);
};