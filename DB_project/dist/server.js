"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const subscribersRouter = require('./routes/subscribers');
const authorRouter = require('./routes/author');
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();
const app = express_1.default();
mongoose_1.default.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose_1.default.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));
app.use(express_1.default.json());
app.use('/subscribers', subscribersRouter);
app.use('/author', authorRouter);
// Server start
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map