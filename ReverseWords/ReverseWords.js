"use strict";
var fs = require('fs');
var ReverseWords = (function () {
    function ReverseWords(filename) {
        this.doc = "\n    Input: Hello World\n    Process: reverse words\n    Output: World Hello\n  ";
        this.reversedWords = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n');
    }
    ReverseWords.prototype.setReverseWords = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                var questionArray = question.split(' ');
                questionArray = questionArray.reverse();
                var answer = questionArray.join(' ');
                _this.reversedWords.push(answer);
            }
        });
    };
    ReverseWords.prototype.print = function () {
        this.reversedWords.forEach(function (answer) {
            console.log(answer);
        });
    };
    return ReverseWords;
}());
var reverseWords = new ReverseWords(process.argv[2]);
reverseWords.setReverseWords();
reverseWords.print();
