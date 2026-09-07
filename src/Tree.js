import Node from "./Node.js";

export default class Tree {
    constructor(array) {
        if (!Array.isArray(array) || array.length === 0)
            throw new Error("Must be initialized with non-empty arrays.");
        array = [...new Set(array)].sort((a, b) => a - b);
        this.root = this.buildTree(array);
    }
    buildTree(array, start = 0, end = array.length - 1) {
        if (start > end) return null;
        const mid = Math.floor((start + end) / 2);
        const node = new Node(array[mid]);
        node.left = this.buildTree(array, start, mid - 1);
        node.right = this.buildTree(array, mid + 1, end);
        return node;
    }
    includes(value) {
        let root = this.root;
        while (root !== null) {
            if (root.data === value) return true;
            value < root.data ? (root = root.left) : (root = root.right);
        }
        return false;
    }
    insert(value) {
        let root = this.root;
        let prev = null;
        while (root !== null) {
            if (root.data === value) return;
            if (value < root.data) {
                prev = root;
                root = root.left;
            } else {
                prev = root;
                root = root.right;
            }
        }
        const node = new Node(value);
        value < prev.data ? (prev.left = node) : (prev.right = node);
    }
    deleteItem(value) {
        let root = this.root;
        let prev = null;
        while (root) {
            if (value === root.data) {
                if (root.left === null && root.right === null) {
                    root.data < prev.data ? (prev.left = null) : (prev.right = null);
                    return;
                }
                if (root.left === null) {
                    let parent = prev;
                    root = root.right;
                    while (root.right) {
                        prev = root;
                        root = root.right;
                    }
                    prev.right = null;
                    parent.data < root.data ? (parent.right = root) : (parent.left = root);
                    return;
                } else {
                    let parent = prev;
                    root = root.left;
                    while (root.right) {
                        prev = root;
                        root = root.right;
                    }
                    prev.right = null;
                    parent.data < root.data ? (parent.right = root) : (parent.left = root);
                    return;
                }
            }
            if (value < root.data) {
                prev = root;
                root = root.left;
            } else {
                prev = root;
                root = root.right;
            }
        }
        return;
    }
    inOrderForEach(callback) {
        if (!callback || typeof callback !== "function")
            throw new Error("Callback function is required.");
        inOrderTrav(this.root, callback);
    }
}

const inOrderTrav = (node, callback) => {
    if (!node) return;
    inOrderTrav(node.left, callback);
    callback(node.data);
    inOrderTrav(node.right, callback);
};
