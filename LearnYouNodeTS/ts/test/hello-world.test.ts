import { helloWorld } from "../src/hello-world"

test('should first', () => { 
    const result = helloWorld()
    expect(result).toBe("HELLO WORLD")
})