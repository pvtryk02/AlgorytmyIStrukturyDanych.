// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
    constructor() {
        this.stack = [];
    }

    // Adds an element to the top of the stack
    push(element) {
        this.stack.push(element);
    }

    // Removes and returns the top element of the stack
    pop() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.stack.pop();
    }

    // Returns the top element of the stack without removing it
    peek() {
        if (this.stack.length === 0) {
            throw new Error("Stack is empty");
        }
        return this.stack[this.stack.length - 1];
    }
}

// Example usage:
const s = new Stack();
s.push(1);
s.push(2);
console.log(s.pop()); // returns 2
console.log(s.pop()); // returns 1


module.exports = Stack;
