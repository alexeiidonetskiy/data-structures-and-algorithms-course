// Binary heap is kind of Binary Trees, where:
// - childrens always smaller then parents
// - left and right order doesn't metters

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }

    swap(idx1, idx2) {
        const temp = this.values[idx1];
        this.values[idx1] = this.values[idx2];
        this.values[idx2] = temp;
    }

    insert(val) {
        this.values.push(val);
        
        let index = this.values.length - 1;
        let parent = Math.floor((index - 1) / 2);
        
        while(this.values[parent] < this.values[index]) {
            this.swap(parent, index);
            index = parent;
            parent = Math.floor((index - 1) / 2);
        }

        return this.values;
    }

    extractMax () {
        if (!this.values.length) { return };

        this.swap(0, this.values.length - 1);
        this.values.pop();

        this.sinkDown();
        

        return this.values;
    }
    // Spagetti code from lector, doesn't clear at all  :(
    // sinkDown() {
    //     let index = 0;
    //     const { length } = this.values;
    //     let element = this.values[0];
        
    //     while (false) {
    //         let leftChildIdx = 2 * index + 1;
    //         let rightChildIdx = 2 * index + 2;
    //         let leftChild, rightChild;
    //         let idxToSwap = null;
            

    //         if (leftChildIdx < length) {
    //             leftChild = this.values[leftChildIdx];
    //             if (leftChild > element) {
    //                 idxToSwap = leftChildIdx;
    //             }
    //         }

    //         if (rightChildIdx < length) {
    //             rightChild = this.values[rightChildIdx];
    //             if (
    //                 idxToSwap === null // Left child is smaller then parent
    //                 && rightChild > element // Right child is bigger then parent
    //                 || idxToSwap !== null // OR if left is bigger then parent
    //                 && rightChild > leftChild // Then pick the biggest index
    //             ) {
    //                 idxToSwap = rightChildIdx;
    //             }
    //         }

    //         if (swap === null) { break }
    //         this.values[idxToSwap] = this.values[swap];
    //         this.values[swap] = element;
    //         idxToSwap = swap;
    //     }
    // }

    // Example from comments
    sinkDown() {
        let parent = 0;
        let left = 1;
        let right = 2;

        let max = Math.max(this.values[left], this.values[right] || -Infinity);

        while (this.values[parent] < max) {
            let child = this.values[left] === max ? left : right;

            this.swap(parent, child);
            parent = child;
            
            left = parent * 2 + 1;
            right = parent * 2 + 2;
            
            max = Math.max(this.values[left], this.values[right] || -Infinity);
        }
    }
}


const heap = new MaxBinaryHeap();
heap.insert(41)
heap.insert(39)
heap.insert(33)
heap.insert(18)
heap.insert(27)
heap.insert(12)