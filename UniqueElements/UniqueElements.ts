import fs = require('fs');

class UniqueElements {
  doc: string = `
    Input: 1,1,1,2,2,3,3,4,4
    Process: Get unique values only
    Output: 1,2,3,4
  `;
  rawData: string;
  questions: Array<string>;
  answers: Array<string> = [];
  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n');
  }
  findUnique(): void{
    this.questions.forEach((question)=> {
      let qArray: Array<number> = question.split(',').map((val: string): number => {
        return Number(val);
      })
      let answer = qArray.filter((val: number, i: number, self: Array<number>): boolean => {
        return self.indexOf(val) === i;
      }).join(',');
      this.answers.push(answer);
    })
  }
  print(): void {
    this.answers.forEach((answer: string): void => {
      console.log(answer);
    })
  }
}

let uniqueElements: UniqueElements = new UniqueElements(process.argv[2]);
uniqueElements.findUnique();
uniqueElements.print();
