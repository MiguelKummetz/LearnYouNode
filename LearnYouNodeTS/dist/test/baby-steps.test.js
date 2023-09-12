"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const baby_steps_1 = require("../src/baby-steps");
const originalArgv = process.argv;
beforeEach(() => {
    process.argv = ['node', 'baby-steps.js'];
});
afterEach(() => {
    process.argv = originalArgv;
});
test('given 3 numbers when callong "babySteps() then should return the number resulting from the sum', () => {
    process.argv[2] = '62';
    process.argv[3] = '73';
    process.argv[4] = '22';
    const result = (0, baby_steps_1.babySteps)();
    expect(result).toEqual(157);
});
test('given 2 numbers when callong "babySteps() then should return the number resulting from the sum', () => {
    process.argv[2] = '20';
    process.argv[3] = '22';
    const result = (0, baby_steps_1.babySteps)();
    expect(result).toEqual(42);
});
test('given 6 numbers when callong "babySteps() then should return the number resulting from the sum', () => {
    process.argv[2] = '24';
    process.argv[3] = '47';
    process.argv[4] = '70';
    process.argv[5] = '97';
    process.argv[6] = '233';
    process.argv[7] = '122';
    const result = (0, baby_steps_1.babySteps)();
    expect(result).toEqual(593);
});
//# sourceMappingURL=baby-steps.test.js.map