const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Construction of book schema
const bookSchema = new Schema({
  title: { type: String, required: true },
  subtitle:{type:String} ,
  author: { type: Array, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true }, 
  // date: { type: Date, default: Date.now },
  // googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


