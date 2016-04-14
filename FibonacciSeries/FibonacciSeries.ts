import fs = require('fs');

class FibonacciSeries {
  rawData: string;
  questions: Array<number>;
  answers: Array<number>;

  constructor(filename: string) {
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n').map((str: string):number => {
      return Number(str);
    })
  }

  fibonacci(n: number): number {
    return dive(1, n, 0, 1);

    function dive(n_prev: number, n: number, prev: number, curr: number): number {
      if (n_prev === n){
        return curr;
      }
      return dive(n_prev + 1, n, curr, prev + curr);
    }
  }

  setAnswer(): void {
    this.answers = this.questions.map((question: number): number =>{
      return this.fibonacci(question);
    })
  }

  print(): void {
    this.questions.forEach((question: number): void =>{
       console.log(this.fibonacci(question));
    })
    // this.answers.forEach((answer: number): void => {
    //   console.log(answer);
    // })
  }
}

let fibonacciSeries: FibonacciSeries = 
  new FibonacciSeries(process.argv[2]);
// fibonacciSeries.setAnswer()
fibonacciSeries.print();