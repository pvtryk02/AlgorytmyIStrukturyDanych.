// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    constructor() {
        this.queue = [];
    }

    // Adds an element to the end of the queue
    add(element) {
        this.queue.push(element);
    }

    // Removes and returns the first element of the queue
    remove() {
        if (this.queue.length === 0) {
            throw new Error("Queue is empty");
        }
        return this.queue.shift();
    }
}

module.exports = Queue;

// Example usage:
const q = new Queue();
q.add(1);
console.log(q.remove()); // returns 1