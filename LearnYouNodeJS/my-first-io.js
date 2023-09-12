const fs = require('fs')

text = fs.readFileSync(process.argv[2]).toString()
const result = text.split('  ')
console.log(result.length)