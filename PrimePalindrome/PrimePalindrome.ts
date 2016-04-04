import fs = require('fs');

class PrimePalindrome {
  challenge: string = `
    Input: none
    Process: print largest prime palindrome < 1000
      Palindromic number is a number where reversing it equals unreversed number
    Output: 929
  `;
  rawData: number;
  primePalindromes: Array<number>
  answer: number;
  constructor(rawData: number) {
    this.rawData = rawData;
    this.primePalindromes = [];
  }
  setPrimePalindromes(): void {
    for (let num = 0; num < this.rawData; num += 1){
      if(this.isPrimeNumber(num) && this.isPalindrome(num)){
        this.primePalindromes.push(num)
      }
    }
  }
  printLargestPrimePalindrome(): void {
    console.log(this.primePalindromes[this.primePalindromes.length - 1]);
  }
  isPrimeNumber(rawNumber: number): boolean {
    for (let i = 2; i < rawNumber; i += 1) {
      if (rawNumber % i === 0) {
        return false;
      }
    }
    return true;
  }
  isPalindrome(num: number): boolean {
    let numArray: Array<number> = String(num).split('').map((num: String) => {
      return Number(num);
    });
    let mid = Math.ceil(numArray.length / 2);
    for(let i = 0; i < mid; i+=1){
      let front = numArray[i]
      let back = numArray[numArray.length - (i + 1)]
      if(front !== back){
        return false;
      }
    }
    return true;
  }
}

let primePalindrome: PrimePalindrome = new PrimePalindrome(1000);
primePalindrome.setPrimePalindromes();
primePalindrome.printLargestPrimePalindrome();