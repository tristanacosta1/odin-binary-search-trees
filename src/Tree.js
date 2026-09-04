export default class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
    buildTree(array, start = 0, end) {
        if (!Array.isArray(array) || array.length === 0)
            throw new Error("Must be initialized with non-empty arrays.");
        const mid = Math.floor((0 + array.length - 1) / 2);
        const root = array[mid];
        end = array.length - 1;

        return root;
    }
}
