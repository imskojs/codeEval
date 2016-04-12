import fs = require('fs');

class OddNumbers {
  rawData: string = 'none';
  questions: Array<number>;
  answers: Array<number>
  constructor() {
  }
  range(start: number, end: number) {
    var arrayRange: Array<number> = [];
    for (var i: number = start; i <= end; i++) {
      arrayRange.push(i);
    }
    this.questions =  arrayRange;
  }
  oddNumbers(){
    this.answers = this.questions.filter((question: number): boolean => {
      if(question % 2 === 0){
        return false
      }
      return true
    })
  }
  print(){
    this.answers.forEach((answer: number): void => {
      console.log(answer);
    })
  }
}

let oddNumbers = new OddNumbers();
oddNumbers.range(1, 99);
oddNumbers.oddNumbers();
oddNumbers.print();


