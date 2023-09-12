"use strict";
const http4 = require('http');
let url = require('url');
const portNumber4 = process.argv[2];
const parsePath = '/api/parsetime';
const unixPath = '/api/unixtime';
const parseTime = (iso) => {
    return {
        hour: iso.getHours(),
        minute: iso.getMinutes(),
        second: iso.getSeconds()
    };
};
const unixTime = (iso) => {
    return {
        unixtime: iso.getTime()
    };
};
const mySwitch = (url) => {
    switch (url.pathname) {
        case parsePath:
            return parseTime(new Date(url.query.iso));
        case unixPath:
            return unixTime(new Date(url.query.iso));
    }
};
const server4 = http4.createServer(function (request, response) {
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'application/json' });
        url = url.parse(request.url, true);
        response.end(JSON.stringify(mySwitch(url)));
    }
    response.end();
});
server4.listen(portNumber4);
//# sourceMappingURL=http-json-api-server.js.map