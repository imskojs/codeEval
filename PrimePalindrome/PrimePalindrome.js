"use strict";
var PrimePalindrome = (function () {
    function PrimePalindrome(rawData) {
        this.challenge = "\n    Input: none\n    Process: print largest prime palindrome < 1000\n      Palindromic number is a number where reversing it equals unreversed number\n    Output: 929\n  ";
        this.rawData = rawData;
        this.primePalindromes = [];
    }
    PrimePalindrome.prototype.setPrimePalindromes = function () {
        for (var num = 0; num < this.rawData; num += 1) {
            if (this.isPrimeNumber(num) && this.isPalindrome(num)) {
                this.primePalindromes.push(num);
            }
        }
    };
    PrimePalindrome.prototype.printLargestPrimePalindrome = function () {
        console.log(this.primePalindromes[this.primePalindromes.length - 1]);
    };
    PrimePalindrome.prototype.isPrimeNumber = function (rawNumber) {
        for (var i = 2; i < rawNumber; i += 1) {
            if (rawNumber % i === 0) {
                return false;
            }
        }
        return true;
    };
    PrimePalindrome.prototype.isPalindrome = function (num) {
        var numArray = String(num).split('').map(function (num) {
            return Number(num);
        });
        var mid = Math.ceil(numArray.length / 2);
        for (var i = 0; i < mid; i += 1) {
            var front = numArray[i];
            var back = numArray[numArray.length - (i + 1)];
            if (front !== back) {
                return false;
            }
        }
        return true;
    };
    return PrimePalindrome;
}());
var primePalindrome = new PrimePalindrome(1000);
primePalindrome.setPrimePalindromes();
primePalindrome.printLargestPrimePalindrome();
