/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import express from 'express';
import mongoose from 'mongoose';

import bookRouter from './routes/book';

import authorRouter from './routes/author';

// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

const app = express();

mongoose.connect(process.env.DATABASE_URL as string, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', (error: Error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use('/books', bookRouter);
app.use('/author', authorRouter);

// Server start
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
