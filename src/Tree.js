import Node from "./Node.js";

export default class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
    buildTree(array, start = 0, end) {
        if (!Array.isArray(array) || array.length === 0)
            throw new Error("Must be initialized with non-empty arrays.");
        end ??= array.length - 1;
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new Node(array[mid]);
        node.left = this.buildTree(array, start, mid - 1);
        node.right = this.buildTree(array, mid + 1, end);
        return node;
    }
}
