const { error } = require('console');
const http2 = require('http');
const url2 = process.argv[2];

http2.get(url2, (response: any) => {
    let data = '';
    response.on('data', (chunk: string) => {
        data += chunk;
    });
    response.on('end', () => {
        console.log(data.toString().length)
        console.log(data.toString());
    });
})
.on('error', (error: string) => {
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