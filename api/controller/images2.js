const router = require("express").Router();
const mongoose = require("mongoose");
const fs = require("fs");
const Image = require("../models/image");

router.post("/img", (req, res) => {
  if(req.file === undefined || req.file === null) { return res.status(400).send({ error: "Please upload an image file" }) }
  console.log(req.file);
  fs.readFile(req.file.path, (err, data) => {
    const base64img = new Buffer(data).toString("base64");
    let newImage = new Image({
      img: base64img,
      contentType: req.file.mimetype,
      size: req.file.size
    });
    newImage.save().then(() => {
      res.send("Thanks for uploading an image");
    });
  });
});


// router.post("/img", (req, res) => {
//   console.log("FILE:", req.files.file);
//   fs.readFile(req.files.file.name, (err, data) => {
//     console.log(data);
//     const base64img = new Buffer(data).toString("base64");
//     console.log(base64img);
//   })
//   res.send({ "hello": "world" });
// })

module.exports = router;
