import fs = require('fs');

export class SumOfPrimes {

  challenge: string = `
    Input: none
    Process: print sum of 1000 prime numbers, prime number is an integer bigger than 1
      that is only divisible by 1 and itself
    Output: 3682913
  `;
  rawData: number;
  primeNumbers: Array<number> = [];
  answer: number;

  constructor(numOfPrimeNumbers: number) {
    this.rawData = numOfPrimeNumbers
  }

  setPrimeNumbers(): void{
    let num = 2; // 1 is not a prime number
    while (this.primeNumbers.length < this.rawData){
      if(this.isPrimeNumber(num)){
        this.primeNumbers.push(num)
      }
      num += 1
    }
  }

  isPrimeNumber(rawNumber: number): boolean {
    for (let i = 2; i < rawNumber; i += 1){
      if(rawNumber % i === 0){
        return false;
      }
    }
    return true;
  }

  setAnswer(){
    this.answer = this.primeNumbers.reduce((prev: number, curr: number) => {
      return prev + curr;
    }, 0)
  }
  printAnswer(){
    console.log(this.answer);
  }

}

let sumOfPrimes = new SumOfPrimes(1000);
sumOfPrimes.setPrimeNumbers();
sumOfPrimes.setAnswer();
sumOfPrimes.printAnswer();
