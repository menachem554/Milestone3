/* eslint-disable prettier/prettier */
import * as express from 'express';

// const isPrime = require('prime-number');
const {primes,isPrime} = require('prime-num');

// eslint-disable-next-line import/prefer-default-export
export const main = (app: express.Application) => {
  // Post prime number
  app.post('/api/numbers/prime/validate', (req, res) => {
    const allNumbers : number[] = Object.values(req.body);
    let prime : boolean = true;
  
    // eslint-disable-next-line no-plusplus
    for (let i : number = 0; i < allNumbers.length; i++){
        if(!isPrime(allNumbers[i])){
            prime = false;
            console.log(allNumbers[i]); 
            break;   
        }
    }  
    res.send(prime);
  });

  // Get Prime number
  app.get('/api/numbers/prime/validate', (req: any, res) => {
      const primeNumbers : number[] = primes(131);
      let sumPrimes : number[];

      // eslint-disable-next-line no-plusplus
      for(let i : number = 0; i< req.query.amount; i++){
             sumPrimes[i] = primeNumbers[i];
      } 
      res.send(`prime: ${sumPrimes}`);   
  });
};
