"use strict";
var fs = require('fs');
var TrickOrTreat = (function () {
    function TrickOrTreat(filename) {
        this.challenge = "\n    Input: Vampires: 1, Zombies: 1, Witches: 1, Houses: 1\n    Process: Vampire gets 3, zombie gets 4, witch gets 5 per house,\n      each candy is divided equally.\n    Output: print Math.floored value of candies per person.\n  ";
        this.candiesPerPerson = [];
        this.rawData = fs.readFileSync(filename).toString();
        this.questions = this.rawData.split('\n');
    }
    TrickOrTreat.prototype.setCandiesPerPerson = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            if (question !== '') {
                var custumes = question.split(', ');
                var vampireCount = Number(custumes[0].split(': ')[1]);
                var zombieCount = Number(custumes[1].split(': ')[1]);
                var witchCount = Number(custumes[2].split(': ')[1]);
                var houseCount = Number(custumes[3].split(': ')[1]);
                var totalKidCount = vampireCount + zombieCount + witchCount;
                var totalCandieCount = (vampireCount * 3 + zombieCount * 4 + witchCount * 5) * houseCount;
                var cadiesPerPerson = totalCandieCount / totalKidCount;
                _this.candiesPerPerson.push(cadiesPerPerson);
            }
        });
    };
    TrickOrTreat.prototype.printCandiesPerPerson = function () {
        this.candiesPerPerson.forEach(function (candieCount) {
            console.log(Math.floor(candieCount));
        });
    };
    return TrickOrTreat;
}());
exports.TrickOrTreat = TrickOrTreat;
var trickOrTreat = new TrickOrTreat(process.argv[2]);
trickOrTreat.setCandiesPerPerson();
trickOrTreat.printCandiesPerPerson();
