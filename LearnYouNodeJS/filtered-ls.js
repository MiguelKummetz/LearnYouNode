const fs = require('fs/promises');
const path = require('path');

const pathName = process.argv[2];
const extension = '.' + process.argv[3];
let result = ''

const call = (dir) => {
    return new Promise((resolve) => {
        resolve(fs.readdir(dir))
    })
}

call(pathName).then((dirContent) => {
    for (let i = 0; i < dirContent.length; i++) {
        const element = dirContent[i];
        if( path.extname(element) === extension){
            result += element + "\n"
        }
    }
    console.log(result)
})

//////////////////////////////////////////////

// const fs = require('fs')
// const path = require('path')

// const folder = process.argv[2]
// const ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err)
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file)
//     }
//   })
// })