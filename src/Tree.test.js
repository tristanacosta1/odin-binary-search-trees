import Tree from "./Tree.js";

describe("Tree Class", () => {
    describe("constructor", () => {
        test("throws for empty arrays and non-array values", () => {
            const invalidInputs = [42, "foo", { foo: "bar" }, null, undefined, []];
            invalidInputs.forEach((input) => {
                expect(() => new Tree(input)).toThrow("Must be initialized with non-empty arrays.");
            });
        });
    });
    describe("root", () => {
        test("is set when array is valid", () => {
            const tree = new Tree([1, 2, 3, 4, 5]);
            expect(tree).toBeDefined();
        });
    });
});
