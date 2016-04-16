import fs = require('fs')
class FileSize {
  doc: string =`
    check file size of process.argv[2]
  `
  static check(filename: string): void {
    console.log(fs.statSync(filename).size);
  }
}

FileSize.check(process.argv[2]);