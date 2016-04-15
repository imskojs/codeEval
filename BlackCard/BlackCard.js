"use strict";
var fs = require('fs');
var BlackCard = (function () {
    function BlackCard(filename) {
        this.doc = "\n    Input: John Tom Mary | 5\n    Process: John:1, Tom:2, Mary:3, John:4, Tom:5; Tom Leaves [John, Mary] remains\n      John:1, Mary:2, John:3, Mary:4, John:5; John leaves [Mary] remains\n      Winner is Mary\n    Output: Mary\n  ";
        this.answers = [];
        this.rawData = fs.readFileSync(filename).toString();
        var lines = this.rawData.split('\n');
        this.questions = lines.map(function (line) {
            var seperate = line.split(' | ');
            var players = seperate[0].split(' ');
            var card = Number(seperate[1]);
            var question = { card: card, players: players };
            return question;
        });
    }
    BlackCard.prototype.answer = function () {
        var _this = this;
        this.questions.forEach(function (question) {
            var card = question.card - 1;
            var players = question.players;
            while (players.length > 1) {
                players.splice(card % players.length, 1);
            }
            _this.answers.push(players[0]);
        });
    };
    BlackCard.prototype.print = function () {
        this.answers.forEach(function (answer) {
            console.log(answer);
        });
    };
    return BlackCard;
}());
var blackCard = new BlackCard(process.argv[2]);
blackCard.answer();
blackCard.print();
