"use strict";
var fs = require('fs');
var FizzBuzz = (function () {
    function FizzBuzz() {
    }
    FizzBuzz.answer = function (input) {
        var source = fs.readFileSync(input).toString().split('\n');
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var line = source_1[_i];
            if (line !== '') {
                var letters = line.split(' ');
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
                console.log(results.join(' '));
            }
        }
    };
    return FizzBuzz;
}());
FizzBuzz.answer(process.argv[2]);
