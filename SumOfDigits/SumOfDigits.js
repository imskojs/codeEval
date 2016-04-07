"use strict";
var fs = require('fs');
var SumOfDigits = (function () {
    function SumOfDigits(filename) {
        this.doc = "\n    Input: 321\n    Process: sum it\n    Output: 6\n  ";
        this.sums = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n');
    }
    SumOfDigits.prototype.setSums = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                _this.sums.push(question.split('')
                    .map(function (item) { return Number(item); })
                    .reduce(function (prev, curr) {
                    return prev + curr;
                }, 0));
            }
        });
    };
    SumOfDigits.prototype.print = function () {
        this.sums.forEach(function (num) {
            console.log(num);
        });
    };
    return SumOfDigits;
}());
var sumOfDigits = new SumOfDigits(process.argv[2]);
sumOfDigits.setSums();
sumOfDigits.print();
