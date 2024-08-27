class Node {
    constructor(val, next, prev) {
        this.val = val;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push (val) {
        const node = new Node(val, null, this.tail);

        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.length) {
            return undefined;
        }

        const temp = this.tail;
        
        if (this.length > 1) {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;
        } else {
            this.head = null;
            this.tail = null;
        }
        

        this.length--;
        return temp;
    }

    shift() {
        if (!this.length) {
            return undefined;
        }

        const temp = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }

        this.length--;
        return temp;
    }

    unshift(val) {
        const node = new Node(val, this.head, null);

        if (!this.length) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            let temp = this.head;
            
            this.head = node;
            this.head.next = temp;
        }

        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        const isRTL = Math.floor(this.length / 2) > index;
        let counter = isRTL ? 0 : this.length - 1;
        let node = isRTL ? this.head : this.tail;
        
        while (counter !== index) {
            if (isRTL) {
                counter++;
                node = node.next;
            } else {
                counter--;
                node = node.prev;
                
            }
        }

        return node;
    }

    set(val, index) {
        const node = this.get(index);
        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    print() {
        let arr = [];
        let node = this.head;
        
        for (let i = 0; i < this.length; i++) {
            arr.push(node.val);
            node = node.next;
        }

        return arr;
    }

    insert(val, index) {
        if (index < 0 || index >= this.length) {
            return false;
        }
        
        if (index === 0) {
            return !!this.unshift(val);
        }

        if (index === this.length) {
            return this.push(val);
        }


        const prevNode = this.get(index - 1);
        
        const node = new Node(val, prevNode.next, prevNode);
        prevNode.next.prev = node;
        prevNode.next = node;
        

        this.length++;
        return true;
    }


    remove (index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }

        if (index === 0) {
            return !!this.shift();
        }

        if (index === this.length) {
            return !!this.pop();
        }

        const itemToRemove = this.get(index);
        
        itemToRemove.prev.next = itemToRemove.next;
        itemToRemove.next.prev = itemToRemove.prev;

        itemToRemove.next = null;
        itemToRemove.prev = null;

        this.length--;

        return itemToRemove;
    }
    
}

const list = new DoublyLinkedList();
list.push(1).push(2).push(3).push(4);