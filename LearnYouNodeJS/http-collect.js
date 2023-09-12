const { error } = require('console');
const http = require('http');
const url = process.argv[2];

http.get(url, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        console.log(data.toString().length)
        console.log(data.toString());
    });
})
.on('error', (error) => {
    console.log(error);
});

// const http = require('http')
// const bl = require('bl')

// http.get(process.argv[2], function (response) {
//   response.pipe(bl(function (err, data) {
//     if (err) {
//       return console.error(err)
//     }
//     data = data.toString()
//     console.log(data.length)
//     console.log(data)
//   }))
// })