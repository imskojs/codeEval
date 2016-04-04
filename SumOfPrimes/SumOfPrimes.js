"use strict";
var SumOfPrimes = (function () {
    function SumOfPrimes(numOfPrimeNumbers) {
        this.challenge = "\n    Input: none\n    Process: print sum of 1000 prime numbers, prime number is an integer bigger than 1\n      that is only divisible by 1 and itself\n    Output: 3682913\n  ";
        this.primeNumbers = [];
        this.rawData = numOfPrimeNumbers;
    }
    SumOfPrimes.prototype.setPrimeNumbers = function () {
        var num = 2; // 1 is not a prime number
        while (this.primeNumbers.length < this.rawData) {
            if (this.isPrimeNumber(num)) {
                this.primeNumbers.push(num);
            }
            num += 1;
        }
    };
    SumOfPrimes.prototype.isPrimeNumber = function (rawNumber) {
        for (var i = 2; i < rawNumber; i += 1) {
            if (rawNumber % i === 0) {
                return false;
            }
        }
        return true;
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
exports.SumOfPrimes = SumOfPrimes;
var sumOfPrimes = new SumOfPrimes(1000);
sumOfPrimes.setPrimeNumbers();
sumOfPrimes.setAnswer();
sumOfPrimes.printAnswer();
