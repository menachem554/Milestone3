"use strict";
/* eslint-disable prettier/prettier */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const Subscriber = require('../models/sybscriber');
// Getting all
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const subscribers = yield Subscriber.find({ name: 'momo2' });
        res.send(subscribers);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}));
// Getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id);
});
// Creating one
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const subscriber = new Subscriber({
        name: req.body.name,
        subscribedToChannel: req.body.subscribedToChannel
    });
    try {
        const newSubscriber = yield subscriber.save();
        res.status(201).json(newSubscriber);
    }
    catch (err) {
        res.status(400).json({ message: err.message });
    }
}));
// // Updating One
// router.patch('/',(req : any, res : any) => {
// })
// // Deleting One
// router.delete('/',(req : any, res : any) => {
// })
module.exports = router;
//# sourceMappingURL=subscribers.js.map