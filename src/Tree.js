export default class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
    buildTree(array) {
        if(!Array.isArray(array)) throw new Error("Must be initialized with arrays.")
}
}
