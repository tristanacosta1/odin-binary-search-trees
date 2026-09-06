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
        // Test with arrays with duplicate and unsorted elements
        test("builds tree properly when passed an unsorted array with duplicates", () => {
            const tree = new Tree([5, 2, 4, 4, 3, 1]);
            const callback = jest.fn();
            tree.inOrderForEach(callback);
            const visited = callback.mock.calls.map(([data]) => data);
            expect(visited).toEqual([1, 2, 3, 4, 5]);
        });
    });

    describe("includes()", () => {
        test("returns false if value is not in the tree", () => {
            const tree = new Tree([1, 2, 3]);
            expect(tree.includes("foo")).toBe(false);
        });
    });

    describe("inOrderForEach()", () => {
        test("throws when provided a non-function or nothing", () => {
            const tree = new Tree([1, 2, 3]);
            expect(() => tree.inOrderForEach()).toThrow("Callback function is required.");
            expect(() => tree.inOrderForEach("foo")).toThrow("Callback function is required.");
        });
        test("visits nodes in order", () => {
            const tree = new Tree([5, 2, 4, 4, 3, 1]);
            const callback = jest.fn();
            tree.inOrderForEach(callback);
            const visited = callback.mock.calls.map(([data]) => data);
            expect(visited).toEqual([1, 2, 3, 4, 5]);
        });
    });
});
