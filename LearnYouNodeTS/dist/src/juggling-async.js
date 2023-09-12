"use strict";
const http = require('http');
const bl = require('bl');
const results6 = [];
let count = 0;
function printResults() {
    for (let i = 0; i < 3; i++) {
        console.log(results6[i]);
    }
}
function httpGet(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            results6[index] = data.toString();
            count++;
            if (count === 3) {
                printResults();
            }
        }));
    });
}
for (let i = 0; i < 3; i++) {
    httpGet(i);
}
//# sourceMappingURL=juggling-async.js.map