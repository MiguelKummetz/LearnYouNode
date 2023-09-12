const fs = require('fs');
const http = require('http');
const portNumber = process.argv[2];
const fileLocation = process.argv[3];

const server = http.createServer(function (request, response) {
    const stream = fs.createReadStream(fileLocation);

    stream.pipe(response)
})

server.listen(portNumber)

////////////////////////////////////

// const http = require('http')
// const fs = require('fs')

// const server = http.createServer(function (req, res) {
//     res.writeHead(200, { 'content-type': 'text/plain' })

//     fs.createReadStream(process.argv[3]).pipe(res)
// })

// server.listen(Number(process.argv[2]))