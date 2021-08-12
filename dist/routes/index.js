"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
// const isPrime = require('prime-number');
const { primes, isPrime } = require('prime-num');
// eslint-disable-next-line import/prefer-default-export
const main = (app) => {
    // Post prime number
    app.post('/api/numbers/prime/validate', (req, res) => {
        const allNumbers = Object.values(req.body);
        let prime = true;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < allNumbers.length; i++) {
            if (!isPrime(allNumbers[i])) {
                prime = false;
                console.log(allNumbers[i]);
                break;
            }
        }
        res.send(prime);
    });
    // Get Prime number
    app.get('/api/numbers/prime/validate', (req, res) => {
        const primeNumbers = primes(131);
        let sumPrimes;
        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < req.query.amount; i++) {
            sumPrimes[i] = primeNumbers[i];
        }
        res.send(`prime: ${sumPrimes}`);
    });
};
exports.main = main;
//# sourceMappingURL=index.js.map