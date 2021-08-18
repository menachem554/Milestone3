/* eslint-disable no-plusplus */
/* eslint-disable prettier/prettier */
import * as express from 'express';

// const isPrime = require('prime-number');
const { primes, isPrime } = require('prime-num');

export default (app: express.Application) => {
  // Post prime number
  app.post('/api/numbers/prime/validate', (req, res) => {
    const allNumbers: number[] = Object.values(req.body);
    let prime: boolean = true;

    for (let i: number = 0; i < allNumbers.length; i += 1) {
      if (!isPrime(allNumbers[i])) {
        prime = false;
        console.log(allNumbers[i]);
        break;
      }
    }
    res.send(prime);
  });

  // Get Prime number
  app.get('/api/numbers/prime/validate', (req: any, res) => {
    const primeNumbers: number[] = primes(131);
    const inputUser: number = req.query.amount;

    if (inputUser < 1 || inputUser > 32) {
      res.status(400).send('The number should be between 1-32');
    } else {
      for (let i: number = inputUser; i < 32; i++) {
        primeNumbers.splice(primeNumbers.length - 1, 1);
      }
      res.send(`prime: ${primeNumbers}`);
    }
  });

  app.get('/api/numbers/prime/display', (req: any, res: any) => {
    const primesTen: number[] = primes(29);
    const prime1: Number = primesTen[0];
    const prime2: Number = primesTen[1];
    const prime3: Number = primesTen[2];
    const prime4: Number = primesTen[3];
    const prime5: Number = primesTen[4];
    const prime6: Number = primesTen[5];
    const prime7: Number = primesTen[6];
    const prime8: Number = primesTen[7];
    const prime9: Number = primesTen[8];
    const prime10: Number = primesTen[9];
    res.render('index', {
      prime1,
      prime2,
      prime3,
      prime4,
      prime5,
      prime6,
      prime7,
      prime8,
      prime9,
      prime10,
    });
  });
};
