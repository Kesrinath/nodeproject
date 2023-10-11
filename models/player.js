const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: String,
  age: Number,
  imageUrl: String,
});

module.exports = mongoose.model("Player", playerSchema);
