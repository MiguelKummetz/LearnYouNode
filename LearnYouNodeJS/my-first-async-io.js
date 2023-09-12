const fs = require('fs/promises')

const readFileFunction = () => {
    const fileContent = (fs.readFile(process.argv[2])).toString();
    result = fileContent.split('\n')
    console.log(result.length -1)
};

readFileFunction()

/////////////////////////////////////////

// const fs = require('fs')
// const file = process.argv[2]

// fs.readFile(file, function (err, contents) {
//     if (err) {
//         return console.log(err)
//     }
// //     fs.readFile(file, 'utf8', callback) can also be used
//     const lines = contents.toString().split('\n').length -1
//     console.log(contents)
// })