"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filteredLs = void 0;
const fs = require('fs/promises');
const path = require('path');
const pathName = process.argv[2];
const extension = '.' + process.argv[3];
let result = '';
const filteredLs = () => {
    const call = (dir) => {
        return new Promise((resolve) => {
            resolve(fs.readdir(dir));
        });
    };
    call(pathName).then((dirContent) => {
        for (let i = 0; i < dirContent.length; i++) {
            const element = dirContent[i];
            if (path.extname(element) === extension) {
                result += element + "\n";
            }
        }
        console.log(result);
        return result;
    });
};
exports.filteredLs = filteredLs;
(0, exports.filteredLs)();
//# sourceMappingURL=filtered-ls.js.map