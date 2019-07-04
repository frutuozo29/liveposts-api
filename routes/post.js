const controller = require("../controllers/post");

function routes(server) {
  server.get("/post", controller.read);
  server.get("/post/:id", controller.readById);
  server.post("/post", controller.create);
  server.put("/post/:id", controller.update);
  server.del("/post/:id", controller.del);
}

module.exports = routes;