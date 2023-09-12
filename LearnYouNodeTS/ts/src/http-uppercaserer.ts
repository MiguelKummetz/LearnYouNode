const http5 = require('http');
const map = require('through2-map')
const portNumber5 = process.argv[2];

const server5 = http5.createServer(function (request: any, response: any) {

    request.pipe(map(function (chunk: string){
        return chunk.toString().toUpperCase()
    })).pipe(response)
})

server5.listen(portNumber5);

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