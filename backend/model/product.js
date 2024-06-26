const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
