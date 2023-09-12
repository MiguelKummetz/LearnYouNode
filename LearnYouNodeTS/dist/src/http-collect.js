"use strict";
const { error } = require('console');
const http2 = require('http');
const url2 = process.argv[2];
http2.get(url2, (response) => {
    let data = '';
    response.on('data', (chunk) => {
        data += chunk;
    });
    response.on('end', () => {
        console.log(data.toString().length);
        console.log(data.toString());
    });
})
    .on('error', (error) => {
    console.log(error);
});
//# sourceMappingURL=http-collect.js.map