const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/notes-db", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then((db) => {
    console.log("Db connectd");
  });
