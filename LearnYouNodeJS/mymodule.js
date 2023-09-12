const fs = require('fs/promises');
const path = require('path');

async function filter(dirName, extension, callback) {
    let result = ''
    const read = (dir) => {
        return new Promise((resolve) => {
            resolve(fs.readdir(dir))
        })
    }
    
    const dirContent = await read(dirName)
            
    for (let i = 0; i < dirContent.length; i++) {
        const element = dirContent[i];
        if( path.extname(element) === extension){
            result += element + "\n"
        }
    }
    return result
}

module.exports = { filter }

/////////////////////////////////////////////////////

var fs = require('fs')
var path = require('path')

module.exports = function (dir, filterStr, callback) {

  fs.readdir(dir, function (err, list) {
    if (err)
      return callback(err)

    list = list.filter(function (file) {
      return path.extname(file) === '.' + filterStr
    })

    callback(null, list)
  })
}