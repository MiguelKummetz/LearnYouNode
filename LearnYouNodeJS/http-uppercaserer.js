const http = require('http');
const map = require('through2-map')
const portNumber = process.argv[2];

const server = http.createServer(function (request, response) {

    request.pipe(map(function (chunk){
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server.listen(portNumber);

//////////////////////////

// const http = require('http')
// const map = require('through2-map')

// const server = http.createServer(function (req, res) {
//     if (req.method !== 'POST') {
//         return res.end('send me a POST\n')
//     }

//     req.pipe(map(function (chunk) {
//         return chunk.toString().toUpperCase()
//     })).pipe(res)
// })

// server.listen(Number(process.argv[2]))