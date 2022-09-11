class Node {
    constructor(data){
        this.__data = data;
        this.__next = null;
    }

    getData() {
        return this.__data;
    }

    getNextNode() {
        return this.__next;
    }

    setNextNode(node) {
        if (node instanceof Node || node === null){
            this.__next = node
        }
        throw new Error("Needs to be a member of the Node class.")
    }
}

export default Node;
