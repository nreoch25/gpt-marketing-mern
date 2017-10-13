const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const multer = require("multer");
const apiConfig = require("./config");

const app = express();

app.use(logger("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});
app.use(multer({dest:"uploads/"}).single("image"));



// MongoDB setup
mongoose.Promise = global.Promise;
mongoose.connect(apiConfig.mongoURI, { useMongoClient: true }, err => {
  if (err) {
    console.log(`MongoDB not connected - ${err}`);
  } else {
    console.log(`MongoDB connected at ${apiConfig.mongoURI}`);
  }
});

const imagesRouter = require("./controller/images2");
app.use("/api", imagesRouter);

app.listen(apiConfig.port, function(error) {
  if (!error) {
    console.log(`API Server is running on port: ${apiConfig.port}`);
  }
});
