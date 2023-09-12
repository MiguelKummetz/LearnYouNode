"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClient = void 0;
const http = require('http');
const url = process.argv[2];
const httpClient = (element) => {
    http.get(element, (response) => {
        response.on('data', function (data) {
            const result = data.toString();
            console.log(result);
            return result;
        });
    });
};
exports.httpClient = httpClient;
(0, exports.httpClient)(url);
//# sourceMappingURL=http-client.js.map