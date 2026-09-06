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
            const tree = new Tree([1, 2, 3]);
            expect(tree.root).toBeDefined();
        });
        test("sets the middle element of the array as the root", () => {
            const tree = new Tree([1, 2, 3]);
            expect(tree.root.data).toBe(2);
        });
        test("creates a node for each element and link them with each other", () => {
            const tree = new Tree([1, 2, 3]);
            expect(tree.root.data).toBe(2);
            expect(tree.root.left.data).toBe(1);
            expect(tree.root.right.data).toBe(3);
        });
        // Test with arrays with duplicate values
        // Test with unsorted arrays
        // Test if nodes are properly set
    });
});
