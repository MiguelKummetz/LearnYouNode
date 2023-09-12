// const mymodule = require('./mymodule.js')

// const pathName = process.argv[2];
// const extension = '.' + process.argv[3];

// async function call() {
//     result = await mymodule.filter(pathName, extension)
//     console.log(result)
// }

// call()

var filterFn = require('./mymodule.js')
var dir = process.argv[2]
var filterStr = process.argv[3]

filterFn(dir, filterStr, function (err: string, list: string[]) {
  if (err)
    return console.error('There was an error:', err)

  list.forEach(function (file) {
    console.log(file)
  })
})