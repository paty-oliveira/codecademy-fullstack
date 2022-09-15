import LinkedList from "./LinkedList";

class Queue {
    constructor(maxSize = Infinity) {
        this.queue = new LinkedList();
        this.maxSize = maxSize;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    hasRoom() {
        return this.size < this.maxSize;
    }

    enqueue(data) {
        if (this.hasRoom()) {
            this.queue.addToTail(data);
            this.size++;
        }
        throw new Error("Queue is full!");
    }

    dequeue() {
        if (!this.isEmpty()) {
            const data = this.queue.removeHead();
            this.size--;
            return data;
        }
        throw new Error("Queue is empty!");
    }
}

export default Queue;