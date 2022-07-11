/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';

const authorSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  birthDate: {
    type: Date,
    default: Date.now,
  },
  bookList: [{
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: 'books'
  }]
},{versionKey: false});

export default mongoose.model('authors', authorSchema);