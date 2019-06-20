const mongoose = require("mongoose");
const config = require("../config.json");

var db;

module.exports.createConnectionMongoose = () => {
  return new Promise((resolve, reject) => {
    if (db) {
      return db;
    }
    mongoose.Promise = global.Promise;
    let stringConnectionDb =
      process.env.NODE_ENV === "production"
        ? `mongodb+srv://${process.env.USER_MONGO}:${
        process.env.PASSWORD_MONGO
        }@cluster0-ceiib.mongodb.net/test?retryWrites=true&w=majority`
        : `mongodb://${config.database.host}:${config.database.port}/${
        config.database.name
        }`;
    mongoose
      .connect(stringConnectionDb, { useNewUrlParser: true })
      .then(() => {
        console.log("[DATABASE] - Mongo is connected");
        resolve(db);
      })
      .catch(err => {
        console.log("[DATABASE] - Error on Mongo connection");
        reject(db);
      });
  });
};