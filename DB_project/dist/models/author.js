"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const authorSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            require: true,
            ref: 'books'
        }]
}, { versionKey: false });
exports.default = mongoose_1.default.model('authors', authorSchema);
//# sourceMappingURL=author.js.map