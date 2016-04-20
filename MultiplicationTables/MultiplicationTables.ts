import fs = require('fs');

class MultiplicationTables {
  doc: string = `
    Input: none
    Process: 12x12 table creator
    Output: print 12x12 table with width of 4, aligned right numbers
  `;
  rawData: string = 'none';
  matrix: Array<Array<number>> = [];
  answer: string;
  constructor() {
  }
  createMatrix(rowLength: number, colLength?: number): MultiplicationTables {
    for (let i: number = 1; i <= rowLength; i += 1){
      let rowContainer: Array<number> = [];
      for (let j: number = 1; j <= (colLength || rowLength); j += 1){
        let cellValue: number = i * j;
        rowContainer.push(cellValue);
      }
      this.matrix.push(rowContainer);
    }
    return this
  }
  formatMatrix(): MultiplicationTables{
    let stringRows: Array<string> = this.matrix.map((row: Array<number>): string => {
      let stringRow: Array<string> = row.map((cellValue: number): string =>{
        let cellString: string = String(cellValue);
        let formattedVal: string = this.formatWidth(4, cellString);
        return formattedVal;
      })
      return stringRow.join('');
    });
    this.answer = stringRows.join('\n');
    return this;
  }
  print(): void {
    console.log(this.answer);
  }

  private formatWidth(width: number, val: string): string{
    let paddingString: string = new Array(width + 1 - val.length).join(' ')
    return paddingString + val;
  }
}

let multiplicationTables: MultiplicationTables = new MultiplicationTables();
multiplicationTables
  .createMatrix(12)
  .formatMatrix()
  .print();
