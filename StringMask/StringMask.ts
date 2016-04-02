import fs = require('fs')

interface AnswerType {
  challenge: string
  rawData: string
  questions: Array<string>
  answers: Array<string>
  setRawData(filename: string): void
  setAnswers(): void
  printAnswers(): void
}

interface Lineable {
  setLines(): void
}

class StringMask implements AnswerType, Lineable {
  challenge: string = `
    Input: hello 11001
    Process: Uppercase characters that have corresponing binary value of 1
    OutPut: HEllO
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
      if (question !== '') {
        let splitted: string[] = question.split(' ')
        let word: string = splitted[0];
        let binary: string = splitted[1];
        let answer: string = '';
        for (let i = 0; i < binary.length; i++){
          if(binary[i] === "1"){
            answer += word[i].toUpperCase()
          } else {
            answer += word[i]
          }
        }
        this.answers.push(answer)
      }
    })

  }

  printAnswers(): void {
    this.answers.forEach((answer: string) => {
      console.log(answer)
    })
  }

}

let stringMask: StringMask = new StringMask()
stringMask.setRawData(process.argv[2])
stringMask.setLines()
stringMask.setAnswers()
stringMask.printAnswers()
