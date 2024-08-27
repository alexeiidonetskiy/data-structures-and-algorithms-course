class Node {
    constructor(val, next) {
        this.val = val;
        this.next = next;
    }
}

// Queue - FIFO, first in first out
// class Queue {
//     constructor() {
//         this.queue = [];
//     }

//     add(val) {
//         return this.queue.push();
//     }

//     remove() {
//         return this.queue.pop();
//     }
// }

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    add (val) {
        // add to the end
        
        const node = new Node(val, null);
        
        if (this.size) {
            this.last.next = node;
            this.last = node;
        } else {
            this.first = node;
            this.last = node;
        }

        this.size++;
        return this;
    }

    remove() {
        // remove from beginning
        const temp = this.first;

        if (!this.size) {
            return null;    
        }
        
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        }
        
        if (this.size > 1) {
            this.first = this.first.next;
        }

        temp.next = null;
        this.size--;
        return temp;
        
    }
}

const queue = new Queue();

