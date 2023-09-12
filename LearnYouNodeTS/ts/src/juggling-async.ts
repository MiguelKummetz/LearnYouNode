// const { error } = require('console');
// const http = require('http');
// const result = [];
// let count = 0;

// function print(){
//     for (let i = 0; i < 3; i++) {
//         console.log(result[i])
//     }
// }

// function callURL (index) {
//     http.get(process.argv[2 + index], (response) => {
//         let data = '';
//         response.on('data', (chunk) => {
//             data += chunk;
//         });
//         response.on('end', () => {
//             result[index] = data.toString()
//             count++
//         });
//         if (count === 3){
//             print()
//         }
//     })
//     .on('error', (error) => {
//         console.log(error);
//     })
// }


// for (let i = 0; i < 3 ; i++) {
//     callURL(i)
// }

/////////////////////

const http = require('http')
const bl = require('bl')
const results6: string[] = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results6[i])
  }
}

function httpGet (index: number) {
  http.get(process.argv[2 + index], function (response: any) {
    response.pipe(bl(function (err: string, data: string) {
      if (err) {
        return console.error(err)
      }

      results6[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}