import fs = require('fs');

interface Question {
  card: number;
  players: Array<string>;
}

class BlackCard {
  doc: string = `
    Input: John Tom Mary | 5
    Process: John:1, Tom:2, Mary:3, John:4, Tom:5; Tom Leaves [John, Mary] remains
      John:1, Mary:2, John:3, Mary:4, John:5; John leaves [Mary] remains
      Winner is Mary
    Output: Mary
  `;
  rawData: string;
  questions: Array<Question>;
  answers: Array<string> = [];
  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    let lines = this.rawData.split('\n');
    this.questions = lines.map((line: string): Question => {
      let seperate: Array<string> = line.split(' | ');
      let players: Array<string> = seperate[0].split(' ');
      let card: number = Number(seperate[1]);
      let question: Question = { card, players };
      return question;
    });
  }
  answer(): void {
    this.questions.forEach((question: Question): void => {
      let card: number = question.card - 1;
      let players: Array<string> = question.players;
      while(players.length > 1){
        players.splice(card % players.length, 1)
      }
      this.answers.push(players[0]);
    })
  }

  print(): void {
    this.answers.forEach((answer: string): void => {
      console.log(answer);
    })
  }
}

let blackCard: BlackCard = new BlackCard(process.argv[2]);
blackCard.answer();
blackCard.print();