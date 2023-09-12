const fs3 = require('fs');
const http3 = require('http');
const portNumber3 = process.argv[2];
const fileLocation = process.argv[3];

const server3 = http3.createServer(function (request: any, response: any) {
    const stream = fs3.createReadStream(fileLocation);

    stream.pipe(response)
})

server3.listen(portNumber3)

////////////////////////////////////

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))