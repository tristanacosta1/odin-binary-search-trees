import Tree from "./Tree.js";

describe("Tree Class", () => {
    describe("Initialization", () => {
        test("throws an error for non-array inputs", () => {
            const invalidInputs = [42, "foo", { foo: "bar" }, null, undefined];
            invalidInputs.forEach((input) => {
                expect(() => new Tree(input)).toThrow("Must be initialized with arrays.");
            });
        });
    });
});
