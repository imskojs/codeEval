"use strict";
var fs = require('fs');
var StringMask = (function () {
    function StringMask() {
    }
    StringMask.answer = function (input) {
        var source = fs.readFileSync(input).toString().split('\n');
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var line = source_1[_i];
            if (line !== '') {
                var splitted = line.split(' ');
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
                console.log(answer);
            }
        }
    };
    return StringMask;
}());
StringMask.answer(process.argv[2]);
