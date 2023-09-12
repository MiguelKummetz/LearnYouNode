// const fs9 = require('fs/promises');
// const path9 = require('path');

// async function filter(dirName: string, extension: string, callback: Function) {
//     let result = ''
//     const read = (dir) => {
//         return new Promise((resolve) => {
//             resolve(fs9.readdir(dir))
//         })
//     }
    
//     const dirContent = await read(dirName)
            
//     for (let i = 0; i < dirContent.length; i++) {
//         const element = dirContent[i];
//         if( path9.extname(element) === extension){
//             result += element + "\n"
//         }
//     }
//     return result
// }

// module.exports = { filter }

/////////////////////////////////////////////////////

var fs = require('fs')
var path = require('path')

module.exports = function (dir: string, filterStr: string, callback: Function) {

  fs.readdir(dir, function (err: string, list: string[]) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}