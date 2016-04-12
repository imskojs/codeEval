"use strict";
var OddNumbers = (function () {
    function OddNumbers() {
        this.rawData = 'none';
    }
    OddNumbers.prototype.range = function (start, end) {
        var arrayRange = [];
        for (var i = start; i <= end; i++) {
            arrayRange.push(i);
        }
        this.questions = arrayRange;
    };
    OddNumbers.prototype.oddNumbers = function () {
        this.answers = this.questions.filter(function (question) {
            if (question % 2 === 0) {
                return false;
            }
            return true;
        });
    };
    OddNumbers.prototype.print = function () {
        this.answers.forEach(function (answer) {
            console.log(answer);
        });
    };
    return OddNumbers;
}());
var oddNumbers = new OddNumbers();
oddNumbers.range(1, 99);
oddNumbers.oddNumbers();
oddNumbers.print();
