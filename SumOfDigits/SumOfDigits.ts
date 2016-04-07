import fs = require('fs');

class SumOfDigits {
  doc: string = `
    Input: 321
    Process: sum it
    Output: 6
  `;
  rawData: string;
  questions: Array<string>
  sums: Array<number> = [];

  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n');
  }

  setSums(): void {
    this.questions.forEach((question: string) => {
      if(question !== ''){
        this.sums.push(question.split('')
            .map((item: string) => { return Number(item) })
            .reduce((prev: number, curr: number) => {
              return prev + curr;
            }, 0))

      }
    })
  }

  print(): void {
   this.sums.forEach((num: number) => {
     console.log(num);
   })
  }
}

let sumOfDigits = new SumOfDigits(process.argv[2]);
sumOfDigits.setSums();
sumOfDigits.print();