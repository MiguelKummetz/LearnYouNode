"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFirstAsyncIo = void 0;
const file = process.argv[2];
const { readFile } = require('fs/promises');
const myFirstAsyncIo = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield readFile(file, 'utf8', function (err, contents) {
        if (err) {
            return console.log(err);
        }
    });
    const lines = (yield result.split('\n').length) - 1;
    console.log(lines);
});
exports.myFirstAsyncIo = myFirstAsyncIo;
(0, exports.myFirstAsyncIo)();
//# sourceMappingURL=my-first-async-io.js.map