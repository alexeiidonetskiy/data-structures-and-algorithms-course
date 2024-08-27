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


// 👉 Iterative
function breadthFirstSearch (tree) {
    let queue = [];
    let visited = [];
    
    queue.push(tree.root);
    
    while (queue.length) {
        const removed = queue.shift();
        visited.push(removed.val);

        if (removed.left) {
            queue.push(removed.left);
        }

        if (removed.right) {
            queue.push(removed.right)
        }
    }

    return visited;
}

// [10, 5, 13, 2, 7, 11, 16]
// const result = breadthFirstSearch(tree);

// 👉 Recursively
function depthFirstSearch_PreOrder(tree) {
    let visited = [];
    let node = tree.root;

    function helper (node) {
        visited.push(node.val);
        
        if (node.left) {
            helper(node.left);
        }

        if (node.right) {
            helper(node.right);
        }        
    }

    helper(node);
    
    return visited;
}

//[10, 5, 2, 7, 13, 11, 16]
// const result = depthFirstSearch_PreOrder(tree);

// 👉 Recursively
function depthFirstSearch_PostOrder(tree) {
    let visited = [];
    let node = tree.root;

    function helper(node) {
        if (node.left) {
            helper(node.left);
        }

        if (node.right) {
            helper(node.right);
        }
        
        visited.push(node.val);
    };
    
    helper(node);
    
    return visited;
}

// [2, 7, 5, 11, 16, 13, 10]
// const result = depthFirstSearch_PostOrder(tree);

// 👉 Recursively
function depthFirstSearch_InOrder(tree) {
      let visited = [];
    let node = tree.root;

    function helper(node) {
        if (node.left) {
            helper(node.left);
        }

        visited.push(node.val);

        if (node.right) {
            helper(node.right);
        }
        
    };
    
    helper(node);
    
    return visited;
}

// [2, 5, 7, 10, 11, 13, 16]
// const result = depthFirstSearch_InOrder(tree);