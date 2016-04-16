"use strict";
var fs = require('fs');
var UniqueElements = (function () {
    function UniqueElements(filename) {
        this.doc = "\n    Input: 1,1,1,2,2,3,3,4,4\n    Process: Get unique values only\n    Output: 1,2,3,4\n  ";
        this.answers = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n');
    }
    UniqueElements.prototype.findUnique = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            var qArray = question.split(',').map(function (val) {
                return Number(val);
            });
            var answer = qArray.filter(function (val, i, self) {
                return self.indexOf(val) === i;
            }).join(',');
            _this.answers.push(answer);
        });
    };
    UniqueElements.prototype.print = function () {
        this.answers.forEach(function (answer) {
            console.log(answer);
        });
    };
    return UniqueElements;
}());
var uniqueElements = new UniqueElements(process.argv[2]);
uniqueElements.findUnique();
uniqueElements.print();
