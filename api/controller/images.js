const router = require("express").Router();
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const del = require("del");
const Image = require("../models/image");

router.post("/img", (req, res) => {
  // check if image file is uploaded
  if(req.file === undefined || req.file === null) { return res.status(400).send({ error: "Please upload an image file" }) }
  fs.readFile(req.file.path, (err, data) => {
    const base64img = new Buffer(data).toString("base64");
    let newImage = new Image({
      img: base64img,
      contentType: req.file.mimetype,
      size: req.file.size,
      width: req.body.width,
      height: req.body.height
    });
    // delete all images in the upload directory
    let folderPath = `${process.cwd()}/uploads`;
    del.sync([`${folderPath}/**`, `!${folderPath}`]);

    newImage.save().then(() => {
      res.send("Thanks for uploading an image");
    })
    .catch((error) => {
      res.status(400).send({ error: error.message });
    });
  });
});

router.get("/img", (req, res) => {
  console.log("WIDTH", req.query.width);
  console.log("HEIGHT", req.query.height);
  res.send({"Hello": "There"});
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
