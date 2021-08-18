/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

const booksSchema = new mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  bookDescription: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Number
  },
  author: {
    type: String,
    required: true,
  },
  pagesNumbers: {
    type: Number,
    required: true, 
  }

});

export default mongoose.model('books', booksSchema);