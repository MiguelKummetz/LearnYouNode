"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hello_world_1 = require("../src/hello-world");
test('should first', () => {
    const result = (0, hello_world_1.helloWorld)();
    expect(result).toBe("HELLO WORLD");
});
//# sourceMappingURL=hello-world.test.js.map