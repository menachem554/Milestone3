"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const author_1 = __importDefault(require("../models/author"));
const router = express_1.default.Router();
router.get('/firstName/:firstName', async (req, res) => {
    try {
        const authorFinded = await author_1.default.findOne({ firstName: req.params.firstName }).populate('bookList');
        res.send(authorFinded.bookList);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
});
router.get('/', async (_req, res) => {
    const authorFinded = await author_1.default.find();
    res.send(authorFinded);
});
router.post('/newAuthor', async (req, res) => {
    const author = new author_1.default({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        birthDate: req.body.birthDate,
        bookList: req.body.bookList
    });
    try {
        const newAuthor = await author.save();
        res.status(201).json(newAuthor);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.get('/filter', async (_req, res) => {
    try {
        const authorFilter = await author_1.default.aggregate([
            {
                '$match': {
                    'firstName': {
                        '$regex': new RegExp('^p.*$'),
                        '$options': 'i'
                    }
                }
            }, {
                '$lookup': {
                    'from': 'books',
                    'localField': 'bookList',
                    'foreignField': '_id',
                    'as': 'books'
                }
            }, {
                '$unwind': {
                    'path': '$books'
                }
            }, {
                '$match': {
                    'books.pagesNumbers': {
                        '$gte': 200
                    },
                    'books.publicationDate': {
                        '$gte': 2015,
                        '$lt': 2020
                    }
                }
            }, {
                '$project': {
                    'bookName': '$books.bookName',
                    'author': '$firstName'
                }
            }
        ]);
        res.json(authorFilter);
    }
    catch (err) {
        res.json({ message: err });
    }
});
exports.default = router;
//# sourceMappingURL=author.js.map