"use strict";
var fs = require('fs');
// interface AnswerType {
//   challenge: string
//   rawData: string
//   questions: Array<string>
//   answers: Array<string>
//   setRawData(filename: string): void
//   setAnswers(): void
//   printAnswers(): void
// }
// interface Lineable {
//   setLines(): void
// }
var StringMask = (function () {
    function StringMask() {
        this.challenge = "\n    Input: hello 11001\n    Process: Uppercase characters that have corresponing binary value of 1\n    OutPut: HEllO\n  ";
        this.questions = [];
        this.answers = [];
    }
    StringMask.prototype.setRawData = function (filename) {
        this.rawData = fs.readFileSync(filename).toString();
    };
    StringMask.prototype.setLines = function () {
        this.questions = this.rawData.split('\n');
    };
    StringMask.prototype.setAnswers = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                var splitted = question.split(' ');
                var word = splitted[0];
                var binary = splitted[1];
                var answer = '';
                for (var i = 0; i < binary.length; i++) {
                    if (binary[i] === "1") {
                        answer += word[i].toUpperCase();
                    }
                    else {
                        answer += word[i];
                    }
                }
                _this.answers.push(answer);
            }
        });
    };
    StringMask.prototype.printAnswers = function () {
        this.answers.forEach(function (answer) {
            console.log(answer);
        });
    };
    return StringMask;
}());
var stringMask = new StringMask();
stringMask.setRawData(process.argv[2]);
stringMask.setLines();
stringMask.setAnswers();
stringMask.printAnswers();
