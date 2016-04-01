import fs = require('fs');
class FizzBuzz {
  static answer(input: string){
    let source: string[] = fs.readFileSync(input).toString().split('\n')
    for(let line of source){
      if(line !== ''){
        let letters: string[] = line.split(' ');
        let fer: number = Number(letters[0]);
        let ber: number = Number(letters[1]);
        let length: number = Number(letters[2]);
        let numbers: number[] = [];
        for (let i: number = 1; i <= length; i++){
          numbers.push(i);
        }
        let results: string[] = [];
        for (let i: number = 0; i < numbers.length; i++) {
          let number = numbers[i];
          if ((number % fer) === 0 && (number % ber) === 0) {
            results.push('FB');
          } else if (number % fer === 0) {
            results.push('F');
          } else if (number % ber === 0) {
            results.push('B');
          } else {
            results.push(String(number));
          }
        }
        console.log(results.join(' '));
      }
    }
  }
}

FizzBuzz.answer(process.argv[2]);
