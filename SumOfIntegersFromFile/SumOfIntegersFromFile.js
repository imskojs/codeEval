"use strict";
var fs = require('fs');
var SumOfIntegersFromFile = (function () {
    function SumOfIntegersFromFile(filename) {
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n').map(function (str) {
            return Number(str);
        });
    }
    SumOfIntegersFromFile.prototype.printAnswer = function () {
        var answer = this.questions.reduce(function (prev, current) {
            return prev + current;
        }, 0);
        console.log(answer);
    };
    return SumOfIntegersFromFile;
}());
var sumOfIntegersFromFile = new SumOfIntegersFromFile(process.argv[2]);
sumOfIntegersFromFile.printAnswer();
