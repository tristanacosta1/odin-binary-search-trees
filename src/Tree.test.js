import Tree from "./Tree.js"

describe("Tree Class", () => {
    describe("Initialization", () => {
        test.each([42, "foo", { foo: "bar" }, null, undefined])(
        "throws an error for %p",
        (input) => {
            expect(() => new Tree(input)).toThrow("Must be initialized with arrays.");
        });
    });
});


