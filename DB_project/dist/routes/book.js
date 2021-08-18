"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_1 = __importDefault(require("../models/books"));
const router = express_1.default.Router();
router.post('/create', async (req, res) => {
    const book = new books_1.default({
        bookName: req.body.bookName,
        bookDescription: req.body.bookDescription,
        publicationDate: req.body.publicationDate,
        author: req.body.author,
        pagesNumbers: req.body.pagesNumbers,
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.get('/Description/:bookDescription', async (req, res) => {
    try {
        const bookd = await books_1.default.find({
            bookDescription: { $regex: req.params.bookDescription, $options: 'i' },
        });
        res.send(bookd);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/pages/250', async (_req, res) => {
    try {
        const bookd = await books_1.default.find({
            pagesNumbers: { $gt: 250 }
        }).sort("pagesNumbers");
        res.send(bookd);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
exports.default = router;
//# sourceMappingURL=book.js.map