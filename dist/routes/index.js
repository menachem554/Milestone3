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
        const inputUser = req.query.amount;
        if (inputUser < 1 || inputUser > 32) {
            res.status(400).send('The number should be between 1-32');
        }
        else {
            // eslint-disable-next-line no-plusplus
            for (let i = inputUser; i < 32; i++) {
                primeNumbers.splice(primeNumbers.length - 1, 1);
            }
            res.send(`prime: ${primeNumbers}`);
        }
    });
    app.get('/api/numbers/prime/display', (req, res) => {
        const primesTen = primes(29);
        const prime1 = primesTen[0];
        const prime2 = primesTen[1];
        const prime3 = primesTen[2];
        const prime4 = primesTen[3];
        const prime5 = primesTen[4];
        const prime6 = primesTen[5];
        const prime7 = primesTen[6];
        const prime8 = primesTen[7];
        const prime9 = primesTen[8];
        const prime10 = primesTen[9];
        res.render('index', { prime1, prime2,
            prime3, prime4, prime5, prime6,
            prime7, prime8, prime9, prime10 });
    });
};
exports.main = main;
//# sourceMappingURL=index.js.map