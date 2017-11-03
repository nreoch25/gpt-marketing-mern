const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  contentType: { type: String, required: true },
  size: { type: Number, required: true },
  img: { type: Buffer, required: true },
  width: { type: Number, required: true },
  height: { type: Number, required: true }
});

const Image = mongoose.model("Image", ImageSchema);

module.exports = Image;
