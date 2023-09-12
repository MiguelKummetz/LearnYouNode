"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFirstIo = void 0;
const fs = require('fs');
const myFirstIo = (element) => {
    const text = fs.readFileSync(element).toString();
    const result = text.split('\n').length - 1;
    console.log(result);
    return result;
};
exports.myFirstIo = myFirstIo;
(0, exports.myFirstIo)(process.argv[2]);
//# sourceMappingURL=my-first-io.js.map