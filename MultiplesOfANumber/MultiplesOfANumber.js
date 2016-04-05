"use strict";
var fs = require('fs');
var MultiplesOfANumber = (function () {
    function MultiplesOfANumber(filename) {
        this.doc = "\n    Input: 13,8\n    Process: the smallest multiple of n which is greater than or equal to 13 and greater than or equal to 8\n    Output: 16\n  ";
        this.smallestNs = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n');
    }
    MultiplesOfANumber.prototype.setSmallestNs = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                var questionArray = question.split(',');
                var x = Number(questionArray[0]);
                var n = Number(questionArray[1]);
                while (x > n) {
                    n *= 2;
                }
                _this.smallestNs.push(n);
            }
        });
    };
    MultiplesOfANumber.prototype.print = function () {
        this.smallestNs.forEach(function (smallestN) {
            console.log(smallestN);
        });
    };
    return MultiplesOfANumber;
}());
var multiplesOfANumber = new MultiplesOfANumber(process.argv[2]);
multiplesOfANumber.setSmallestNs();
multiplesOfANumber.print();
