"use strict";
var fs = require('fs');
var FibonacciSeries = (function () {
    function FibonacciSeries(filename) {
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n').map(function (str) {
            return Number(str);
        });
    }
    FibonacciSeries.prototype.fibonacci = function (n) {
        return dive(1, n, 0, 1);
        function dive(n_prev, n, prev, curr) {
            if (n_prev === n) {
                return curr;
            }
            return dive(n_prev + 1, n, curr, prev + curr);
        }
    };
    FibonacciSeries.prototype.setAnswer = function () {
        var _this = this;
        this.answers = this.questions.map(function (question) {
            return _this.fibonacci(question);
        });
    };
    FibonacciSeries.prototype.print = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            console.log(_this.fibonacci(question));
        });
        // this.answers.forEach((answer: number): void => {
        //   console.log(answer);
        // })
    };
    return FibonacciSeries;
}());
var fibonacciSeries = new FibonacciSeries(process.argv[2]);
// fibonacciSeries.setAnswer()
fibonacciSeries.print();
