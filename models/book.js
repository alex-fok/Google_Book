const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// id, title, snippet, authors, image
const bookSchema = new Schema({
  _id: {type: String, required: true},
  title: { type: String, required: true },
  snippet: {type: String},
  authors: { type: [String] },
  image: {type: String},
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
