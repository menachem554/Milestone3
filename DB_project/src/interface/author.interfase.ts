/* eslint-disable prettier/prettier */
import mongoose from 'mongoose';
/* eslint-disable prettier/prettier */
export interface IAuthor {
    firstName: String;
    lastName: String;
    birthDate: Number;
    bookList: mongoose.Schema.Types.ObjectId[];
  }