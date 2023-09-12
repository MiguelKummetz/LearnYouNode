const fs = require('fs')
// const element = fs.stat(process.argv[2])
// console.log(element)

export const myFirstIo = (element: string) => {
    const text = fs.readFileSync(element).toString()
    const result = text.split('\n').length - 1
    console.log(result)
    return result

}
myFirstIo(process.argv[2])