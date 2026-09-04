export default class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
    buildTree(array) {
        if (!Array.isArray(array) || array.length === 0)
            throw new Error("Must be initialized with non-empty arrays.");
    }
}
