import fs = require('fs');

interface Question {
  first: Array<number>;
  second: Array<number>;
}

class SetIntersection {
  doc: string = `
    Input: 1,2,3,4;4,5,6
    Process: split ; and find intersection of values in first, and second split
    Output: 4
  `;
  rawData: string;
  questions: Array<Question>;
  answers: Array<string> = [];
  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n').map((question: string): Question => {
      let splitted: Array<string> = question.split(';');
      let first: Array<number> = splitted[0].split(',').map((val: string): number => {
        return Number(val);
      });
      let second: Array<number> = splitted[1].split(',').map((val: string): number => {
        return Number(val);
      });
      return { first, second };
    });
  }
  intersection(): void{
    this.questions.forEach((question: Question): void => {
      let answers: Array<number> = [];
      question.first.forEach((firstVal: number, i: number): void => {
        for (let j = 0; j < question.second.length; j += 1) {
          let secondVal = question.second[j];
          if (firstVal === secondVal) {
            answers.push(secondVal);
            question.second.splice(j, 1);
            break;
          }
        }
      })
      this.answers.push(answers.join(','))
    });
  }
  print(): void {
    this.answers.forEach((answer: string): void => {
      console.log(answer);
    })
  }
}

let setIntersection: SetIntersection = new SetIntersection(process.argv[2]);
setIntersection.intersection();
setIntersection.print();
