const testJestAddition = require("./index");

test("add 2 + 3 to equal 5", () => {
	expect(testJestAddition(2, 3)).toBe(5);
})

