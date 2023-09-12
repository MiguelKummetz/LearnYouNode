// const fs = require('fs/promises')

import path from "path"

// export const myFirstAsyncIo = () => {
//     console.log(process.argv[2])
//     const readFileFunction = () => {
//         const fileContent = (fs.readFile(process.argv[2])).toString();
//         let result = fileContent.split('\n').length -1
//         console.log(result)
//         return result
//     };
    
//     readFileFunction()
// }
// myFirstAsyncIo()

/////////////////////////////////////////
const file = process.argv[2]

const {readFile} = require('fs/promises');

// const fs = require('fs')

// export const myFirstAsyncIo = async () => {
//     // console.log(pathArchivo)
//     await fs.readFile(file, 'utf8', function (err: string, contents: string) {
//     if (err) {
//         return console.log(err)
//     }
//     const lines: number = contents.split('\n').length -1
//     console.log(lines)
//     return Buffer.from(lines)
// })};

// myFirstAsyncIo()

export const myFirstAsyncIo = async()=>{
    // console.log('...')
    const result = await readFile(file, 'utf8', function (err: string, contents: string) {
        if (err) {
            return console.log(err)
        }
    })
    
    const lines: number = await result.split('\n').length -1
    console.log(lines)
    // return lines
}

myFirstAsyncIo()