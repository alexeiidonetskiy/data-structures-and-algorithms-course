// Stack - LIFO: last in, first out

class Node{
    constructor(val, next) {
        this.val = val;
        this.next = next; 
    }
}

class Stack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(val) {
        const newNode = new Node(val, this.head);
        this.head = newNode;

        if (!this.length) {
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    remove() {
        if (!this.length) {
            return null;
        }

        const nodeToRemove = this.head;
        
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            nodeToRemove.next = null;
        }
        
        
        this.length--;
        return nodeToRemove;
    }
}

const stack = new Stack();
stack.add(1).add(2).add(3);
