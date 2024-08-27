class Node {
    constructor(val, prio) {
        this.val = val;
        this.prio = prio; 
    }
}

// It's MIN Binary heap implementation, where on top is lowest value
class PriorityQueue {
    constructor() {
        this.values = [];
    }

    swap(idx1, idx2) {
        [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]]
    }

    enqueue (val, prio) {
        const value = new Node(val, prio);
        this.values.push(value);
        
        if (this.values.length === 1) {
            return this.values;
        }
        
        let index = this.values.length - 1;
        let parent = Math.floor((index - 1) / 2);

        while(parent >= 0 && this.values[parent].prio > this.values[index].prio) {
            this.swap(parent, index);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }

        return this.values;
    }

    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return this.values;
    }
    
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.prio < element.prio) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.prio < element.prio) || 
                    (swap !== null && rightChild.prio < leftChild.prio)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

const queue = new PriorityQueue();

queue.enqueue('Common cold', 5);
queue.enqueue('Scratch of head', 4);
queue.enqueue('High fever', 3);
queue.enqueue('Blown head', 0);