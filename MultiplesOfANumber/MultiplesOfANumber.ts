import fs = require('fs');

class MultiplesOfANumber {
  doc: string = `
    Input: 13,8
    Process: the smallest multiple of n which is greater than or equal to 13 and greater than or equal to 8
    Output: 16
  `;
  rawData: string;
  questions: Array<string>;
  smallestNs: Array<number> = [];
  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n');
  }
  setSmallestNs(): void {
    this.questions.forEach((question) => {
      if(question !== ''){
        let questionArray: Array<string> = question.split(',');
        let x: number = Number(questionArray[0]);
        let n: number = Number(questionArray[1]);
        while(x > n){
          n *= 2;
        }
        this.smallestNs.push(n);
      }
    })
  }
  print(): void {
    this.smallestNs.forEach((smallestN) => {
      console.log(smallestN);
    })
  }

}

let multiplesOfANumber = new MultiplesOfANumber(process.argv[2]);
multiplesOfANumber.setSmallestNs();
multiplesOfANumber.print();