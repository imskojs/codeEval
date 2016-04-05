import fs = require('fs');

class ReverseWords {

  doc: string = `
    Input: Hello World
    Process: reverse words
    Output: World Hello
  `;
  rawData: string;
  questions: Array<string>;
  reversedWords: Array<string> = [];

  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n');
  }

  setReverseWords(): void {
    this.questions.forEach((question: string) => {
      if(question !== ''){
        let questionArray: Array<string> = question.split(' ');
        questionArray = questionArray.reverse()
        let answer = questionArray.join(' ');
        this.reversedWords.push(answer);
      }
    })
  }

  print(): void {
    this.reversedWords.forEach((answer: string) => {
      console.log(answer)
    })
  }
}

let reverseWords = new ReverseWords(process.argv[2]);
reverseWords.setReverseWords();
reverseWords.print();