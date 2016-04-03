import fs = require('fs');

class SumOfPrimes {

  challenge: string = `
    Input: none
    Process: print sum of 1000 prime numbers
    Output: 3682913
  `;
  rawData: number;
  primeNumbers: Array<number> = [];
  answer: number;
  constructor(numOfPrimeNumbers: number) {
    this.rawData = numOfPrimeNumbers
  }
  setPrimeNumbers(): void{
    let num = 2;
    while (this.primeNumbers.length < this.rawData){
      let isPrime = true;
      for (let i = 2; i <= num; i += 1){
        if(num % i === 0 && i !== num){
          isPrime = false;
          break;
        }
      }
      if(isPrime === true){
        this.primeNumbers.push(num)
      }
      num += 1
    }
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
