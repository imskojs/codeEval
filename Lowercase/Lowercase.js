"use strict";
var fs = require('fs');
var LowerCase = (function () {
    function LowerCase(filename) {
        this.doc = "\n    Input: Hello CodeEval\n    Process: lower case it\n    Output: hello codeeval\n  ";
        this.lowerCases = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n');
    }
    LowerCase.prototype.toLowerCase = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                _this.lowerCases.push(question.toLowerCase());
            }
        });
    };
    LowerCase.prototype.print = function () {
        this.lowerCases.forEach(function (lowercase) {
            console.log(lowercase);
        });
    };
    return LowerCase;
}());
var lowerCase = new LowerCase(process.argv[2]);
lowerCase.toLowerCase();
lowerCase.print();
