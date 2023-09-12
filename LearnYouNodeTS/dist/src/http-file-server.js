"use strict";
const fs3 = require('fs');
const http3 = require('http');
const portNumber3 = process.argv[2];
const fileLocation = process.argv[3];
const server3 = http3.createServer(function (request, response) {
    const stream = fs3.createReadStream(fileLocation);
    stream.pipe(response);
});
server3.listen(portNumber3);
//# sourceMappingURL=http-file-server.js.map