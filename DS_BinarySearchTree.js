class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const node = new Node(val);

        if (!this.root) {
            this.root = node;
            return this;
        }

        let temp = this.root;

        while(temp.val) {
            if (node.val > temp.val) {
                if (temp.right) {
                    temp = temp.right;
                } else {
                    temp.right = node;
                    break;
                }
            } else {
                if (temp.left) {
                    temp = temp.left;
                } else {
                    temp.left = node;
                    break;
                }
            }
        }
        
        return this;
    }

    find (val) {
        if (!this.root) {
            return undefined;
        }

        let temp = this.root;

        while (temp && temp.val) {
            if (temp.val === val) { return temp; }
            
            if (temp.val > val) { 
                temp = temp.left;
            } else { 
                temp = temp.right;
            }
        }

        return undefined;
    }
}

const tree = new BinarySearchTree();

tree.insert(10).insert(13).insert(5).insert(2).insert(7).insert(11).insert(16);


//     10
//    /  \
//   5    13
//  / \   / \
// 2   7 11  16
