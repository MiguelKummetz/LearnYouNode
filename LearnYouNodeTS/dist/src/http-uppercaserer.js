"use strict";
const http5 = require('http');
const map = require('through2-map');
const portNumber5 = process.argv[2];
const server5 = http5.createServer(function (request, response) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(response);
});
server5.listen(portNumber5);
//# sourceMappingURL=http-uppercaserer.js.map