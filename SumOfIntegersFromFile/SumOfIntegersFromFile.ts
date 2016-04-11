import fs = require('fs');

class SumOfIntegersFromFile {
  rawData: string;
  questions: Array<number>;
  constructor(filename: string){
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n').map((str) => {
      return Number(str);
    })
  }
  printAnswer(){
    var answer: number = this.questions.reduce((prev: number, current: number): number => {
      return prev + current;
    }, 0)
    console.log(answer);
  }
}

let sumOfIntegersFromFile: SumOfIntegersFromFile =
  new SumOfIntegersFromFile(process.argv[2]);
sumOfIntegersFromFile.printAnswer()

