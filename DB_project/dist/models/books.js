"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const booksSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model('books', booksSchema);
//# sourceMappingURL=books.js.map