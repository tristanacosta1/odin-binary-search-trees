export default class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
    buildTree(array) {
        if (!Array.isArray(array) || array.length === 0)
            throw new Error("Must be initialized with non-empty arrays.");

        const mid = Math.floor((0 + array.length - 1) / 2);
        const root = array[mid];

        return root;
    }
}
