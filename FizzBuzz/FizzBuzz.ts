import fs = require('fs')

// interface AnswerType {
//   challenge: string
//   rawData: string
//   questions: Array<string>
//   answers: Array<string>
//   setRawData(filename: string): void
//   setAnswers(): void
//   printAnswers(): void
// }

// interface Lineable {
//   setLines(): void
// }

export class FizzBuzz {
  challenge: string = `
    Input: 2 3 5
    Process: for range 0 to <5> if it is divisible by <2> print F
      if it is divisible by <3> print B
      if it is divisible by <2> and <5> print FB
      else print current number in range
    Output: 0 1 F B F 5
  `
  rawData: string
  questions: Array<string> = []
  answers: Array<string> = []

  setRawData(filename: string): void {
    this.rawData = fs.readFileSync(filename).toString()
  }

  setLines(): void {
    this.questions = this.rawData.split('\n')
  }

  setAnswers(): void {
    this.questions.forEach((question: string) => {

      if(question !== ''){
        let letters: string[] = question.split(' ')
        let fer: number = Number(letters[0])
        let ber: number = Number(letters[1])
        let length: number = Number(letters[2])
        let numbers: number[] = []
        for (let i: number = 1; i <= length; i++){
          numbers.push(i)
        }
        let results: string[] = []
        for (let i: number = 0; i < numbers.length; i++) {
          let number = numbers[i]
          if ((number % fer) === 0 && (number % ber) === 0) {
            results.push('FB')
          } else if (number % fer === 0) {
            results.push('F')
          } else if (number % ber === 0) {
            results.push('B')
          } else {
            results.push(String(number))
          }
        }
        this.answers.push(results.join(' '))
      }
      
    })
  }

  printAnswers(): void {
    this.answers.forEach((answer: string) => {
      console.log(answer);
    })
  }

}

let fizzBuzz: FizzBuzz = new FizzBuzz();
fizzBuzz.setRawData(process.argv[2]);
fizzBuzz.setLines()
fizzBuzz.setAnswers()
fizzBuzz.printAnswers()
