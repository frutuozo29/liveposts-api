const config = require("./config.json");
const database = require("./database/index");
const server = require("./server/index");

database
  .createConnectionMongoose()
  .then(() => {
    var port = process.env.PORT || config.ENV.port;
    server.listen(port, () => {
      console.log(`[SERVER] - Server is running on port: ${port}`);
    });
  })
  .catch(err => {
    console.log(`[SERVER] - ${err}`);
  });