"use strict";
var fs = require('fs');
var FizzBuzz = (function () {
    function FizzBuzz() {
        this.challenge = "\n    Input: 2 3 5\n    Process: for range 0 to <5> if it is divisible by <2> print F\n      if it is divisible by <3> print B\n      if it is divisible by <2> and <5> print FB\n      else print current number in range\n    Output: 0 1 F B F 5\n  ";
        this.questions = [];
        this.answers = [];
    }
    FizzBuzz.prototype.setRawData = function (filename) {
        this.rawData = fs.readFileSync(filename).toString();
    };
    FizzBuzz.prototype.setLines = function () {
        this.questions = this.rawData.split('\n');
    };
    FizzBuzz.prototype.setAnswers = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                var letters = question.split(' ');
                var fer = Number(letters[0]);
                var ber = Number(letters[1]);
                var length_1 = Number(letters[2]);
                var numbers = [];
                for (var i = 1; i <= length_1; i++) {
                    numbers.push(i);
                }
                var results = [];
                for (var i = 0; i < numbers.length; i++) {
                    var number = numbers[i];
                    if ((number % fer) === 0 && (number % ber) === 0) {
                        results.push('FB');
                    }
                    else if (number % fer === 0) {
                        results.push('F');
                    }
                    else if (number % ber === 0) {
                        results.push('B');
                    }
                    else {
                        results.push(String(number));
                    }
                }
                _this.answers.push(results.join(' '));
            }
        });
    };
    FizzBuzz.prototype.printAnswers = function () {
        this.answers.forEach(function (answer) {
            console.log(answer);
        });
    };
    return FizzBuzz;
}());
var fizzBuzz = new FizzBuzz();
fizzBuzz.setRawData(process.argv[2]);
fizzBuzz.setLines();
fizzBuzz.setAnswers();
fizzBuzz.printAnswers();
