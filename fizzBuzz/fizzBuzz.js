"use strict";
var fs = require('fs');
var answer;
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== '') {
        var letters = line.split(' ');
        var fer = Number(letters[0]);
        var ber = Number(letters[1]);
        var length = Number(letters[2]);
        var numbers = [];
        var i;
        for (i = 1; i <= length; i++) {
            numbers.push(i);
        }
        var results = [];
        var numbersLength = numbers.length;
        for (i = 0; i < numbersLength; i++) {
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
                results.push(number);
            }
        }
        var resultText = results.join(' ');
        resultText = resultText;
        answer = resultText;
    }
    console.log(answer);
});
