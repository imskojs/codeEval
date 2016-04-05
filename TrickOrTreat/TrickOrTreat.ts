import fs = require('fs');

export class TrickOrTreat {
  challenge: string = `
    Input: Vampires: 1, Zombies: 1, Witches: 1, Houses: 1
    Process: Vampire gets 3, zombie gets 4, witch gets 5 per house,
      each candy is divided equally.
    Output: print Math.floored value of candies per person.
  `;
  rawData: string;
  questions: Array<string>;
  candiesPerPerson: Array<number> = [];

  constructor(filename: string){
    this.rawData = fs.readFileSync(filename).toString();
    this.questions = this.rawData.split('\n');
  }

  setCandiesPerPerson(): void {
    this.questions.forEach((question: string) => {
      if(question !== ''){
        let custumes: Array<string> = question.split(', ');
        let vampireCount: number = Number(custumes[0].split(': ')[1]);
        let zombieCount: number = Number(custumes[1].split(': ')[1]);
        let witchCount: number = Number(custumes[2].split(': ')[1]);
        let houseCount: number = Number(custumes[3].split(': ')[1]);

        let totalKidCount: number = vampireCount + zombieCount + witchCount;
        let totalCandieCount: number = (vampireCount * 3 + zombieCount * 4 + witchCount * 5) * houseCount;
        let cadiesPerPerson: number = totalCandieCount / totalKidCount;
        this.candiesPerPerson.push(cadiesPerPerson);
      }
    })
  }

  printCandiesPerPerson(): void{
    this.candiesPerPerson.forEach((candieCount: number) => {
      console.log(Math.floor(candieCount));
    })
  }

}

let trickOrTreat = new TrickOrTreat(process.argv[2]);
trickOrTreat.setCandiesPerPerson();
trickOrTreat.printCandiesPerPerson();