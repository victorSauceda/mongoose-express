const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  isbn: Number,
  title: String,
  subtitle: String,
  author: String,
  publisher: String,
  published: String,
  pages: Number,
  description: String,
  website: String,
});
module.exports = mongoose.model("Book", bookSchema);
