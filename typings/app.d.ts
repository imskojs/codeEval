interface AnswerType {
  challenge: string
  rawData: string
  questions: Array<string>
  answers: Array<string>
  setRawData(filename: string): void
  setAnswers(): void
  printAnswers(): void
}

