"use strict";
var fs = require('fs');
var FileSize = (function () {
    function FileSize() {
        this.doc = "\n    check file size of process.argv[2]\n  ";
    }
    FileSize.check = function (filename) {
        console.log(fs.statSync(filename).size);
    };
    return FileSize;
}());
FileSize.check(process.argv[2]);
