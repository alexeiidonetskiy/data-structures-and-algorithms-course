class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    push (val) {
        const node = new Node(val);
        if (this.head) {
            this.tail.next = node;
            this.tail = node;
        } else {
            this.head = node;
            this.tail = this.head;
        }
    
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        
        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        
        return current.val;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let temp = this.head;
        this.head = this.head.next;
        this.length--;

        if (!this.length) {
            this.tail = null;
        }

        return temp.val
    }

    unshift(val) {
        let temp = this.head;
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        
        this.length++;
        
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        
        let count = 0;
        let temp = this.head;

        while (count < index) {
            temp = temp.next;
            count++;
        }

        return temp;
    }

    set(index, val) {
        const temp = this.get(index);

        if (!temp) {
            return false;
        }

        temp.val = val;
        return true;
    }

    insert(index, val) {
        if (index < 0 || index >= this.length) {
            return false;
        }

        if (index === this.length) { 
            return !!this.push(val);
        }
        
        if (index === 0) {
            return !!this.unshift(val);
        }
        
        const newNode = new Node(val);
        const prevNode = this.get(index - 1);

        newNode.next = prevNode.next;
        prevNode.next = newNode;

        this.length++;
        
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === this.length) { 
            return !!this.pop();
        }
        
        if (index === 0) {
            return !!this.shift();
        }

        const prevNode = this.get(index - 1);
        const nodeToRemove = prevNode.next;

        prevNode.next = nodeToRemove.next;

        this.length--;
        
        return nodeToRemove.val;
    }

    print() {
        let current = this.head;
        const result = [];
        
        while(current) {
            result.push(current.val);
            current = current.next;
        }

        return result;
    }

    reverse() {
        let current = this.head;
        this.head = this.tail;
        this.tail = current;


        let prev = null;
        let next = null;
        
        for (let i = 0; i < this.length; i++) {
            
            next = current.next;
            
            current.next = prev;
            
            prev = current; 
            current = next;

        }
        
        return this;
    }
}

const list = new SinglyLinkedList();

list.push(1).push(2).push(3).push(4);
