import fs = require('fs')

class StringMask {
  static answer(input: string): void {
    let source: string[] = fs.readFileSync(input).toString().split('\n')
    for (let line of source) {
      if (line !== '') {
        let splitted: string[] = line.split(' ')
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
        console.log(answer)
      }
    }
  }
}

StringMask.answer(process.argv[2])