"use strict";
var SumOfPrimes = (function () {
    function SumOfPrimes(numOfPrimeNumbers) {
        this.challenge = "\n    Input: none\n    Process: print sum of 1000 prime numbers\n    Output: 3682913\n  ";
        this.primeNumbers = [];
        this.rawData = numOfPrimeNumbers;
    }
    SumOfPrimes.prototype.setPrimeNumbers = function () {
        var num = 2;
        while (this.primeNumbers.length < this.rawData) {
            var isPrime = true;
            for (var i = 2; i <= num; i += 1) {
                if (num % i === 0 && i !== num) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime === true) {
                this.primeNumbers.push(num);
            }
            num += 1;
        }
    };
    SumOfPrimes.prototype.setAnswer = function () {
        this.answer = this.primeNumbers.reduce(function (prev, curr) {
            return prev + curr;
        }, 0);
    };
    SumOfPrimes.prototype.printAnswer = function () {
        console.log(this.answer);
    };
    return SumOfPrimes;
}());
var sumOfPrimes = new SumOfPrimes(1000);
sumOfPrimes.setPrimeNumbers();
sumOfPrimes.setAnswer();
sumOfPrimes.printAnswer();
