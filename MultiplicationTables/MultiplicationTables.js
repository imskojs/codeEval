"use strict";
var MultiplicationTables = (function () {
    function MultiplicationTables() {
        this.doc = "\n    Input: none\n    Process: 12x12 table creator\n    Output: print 12x12 table with width of 4, aligned right numbers\n  ";
        this.rawData = 'none';
        this.matrix = [];
    }
    MultiplicationTables.prototype.createMatrix = function (rowLength, colLength) {
        for (var i = 1; i <= rowLength; i += 1) {
            var rowContainer = [];
            for (var j = 1; j <= (colLength || rowLength); j += 1) {
                var cellValue = i * j;
                rowContainer.push(cellValue);
            }
            this.matrix.push(rowContainer);
        }
        return this;
    };
    MultiplicationTables.prototype.formatMatrix = function () {
        var _this = this;
        var stringRows = this.matrix.map(function (row) {
            var stringRow = row.map(function (cellValue) {
                var cellString = String(cellValue);
                var formattedVal = _this.formatWidth(4, cellString);
                return formattedVal;
            });
            return stringRow.join('');
        });
        this.answer = stringRows.join('\n');
        return this;
    };
    MultiplicationTables.prototype.print = function () {
        console.log(this.answer);
    };
    MultiplicationTables.prototype.formatWidth = function (width, val) {
        var paddingString = new Array(width + 1 - val.length).join(' ');
        return paddingString + val;
    };
    return MultiplicationTables;
}());
var multiplicationTables = new MultiplicationTables();
multiplicationTables
    .createMatrix(12)
    .formatMatrix()
    .print();
