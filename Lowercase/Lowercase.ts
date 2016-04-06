import fs = require('fs');

class LowerCase {

  doc: string =  `
    Input: Hello CodeEval
    Process: lower case it
    Output: hello codeeval
  `;

  rawData: string;
  questions: Array<string>;
  lowerCases: Array<string> = [];

  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n');
  }

  toLowerCase(): void {
    this.questions.forEach((question) => {
      if(question !== '') {
        this.lowerCases.push(question.toLowerCase())
      }
    })
  }

  print(): void {
    this.lowerCases.forEach((lowercase) => {
      console.log(lowercase);
    })
  }

}

let lowerCase = new LowerCase(process.argv[2]);
lowerCase.toLowerCase();
lowerCase.print();