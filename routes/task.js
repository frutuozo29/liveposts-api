const controller = require("../controllers/task");

function routes(server) {
  server.get("/task", controller.read);
  server.post("/task", controller.create);
  server.put("/task/:id", controller.update);
  server.del("/task/:id", controller.del);
}

module.exports = routes;