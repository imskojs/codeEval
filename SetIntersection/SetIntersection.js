"use strict";
var fs = require('fs');
var SetIntersection = (function () {
    function SetIntersection(filename) {
        this.doc = "\n    Input: 1,2,3,4;4,5,6\n    Process: split ; and find intersection of values in first, and second split\n    Output: 4\n  ";
        this.answers = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n').map(function (question) {
            var splitted = question.split(';');
            var first = splitted[0].split(',').map(function (val) {
                return Number(val);
            });
            var second = splitted[1].split(',').map(function (val) {
                return Number(val);
            });
            return { first: first, second: second };
        });
    }
    SetIntersection.prototype.intersection = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            var answers = [];
            question.first.forEach(function (firstVal, i) {
                for (var j = 0; j < question.second.length; j += 1) {
                    var secondVal = question.second[j];
                    if (firstVal === secondVal) {
                        answers.push(secondVal);
                        question.second.splice(j, 1);
                        break;
                    }
                }
            });
            _this.answers.push(answers.join(','));
        });
    };
    SetIntersection.prototype.print = function () {
        this.answers.forEach(function (answer) {
            console.log(answer);
        });
    };
    return SetIntersection;
}());
var setIntersection = new SetIntersection(process.argv[2]);
setIntersection.intersection();
setIntersection.print();
