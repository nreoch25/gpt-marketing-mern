const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  contentType: String,
  size: Number,
  img: Buffer
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
