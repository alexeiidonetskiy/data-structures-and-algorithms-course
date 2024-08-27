class PriorityQueue {
  constructor(){
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  };
}

// Unweighted adjacencyList
// {
//     "A": ["B", "C"],
// }


// Weighted adjacencyList
// {
//     "A": [
//         {node: "B", weight: 10},
//         {node: "C", weight: 8},
//     ]
// }

class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }
    
    addEdge(v1, v2, weight) {
        const list = this.adjacencyList;
        
        list[v1].push({ node: v2, weight });
        list[v2].push({ node: v1, weight });
    }

    // Dijkstra
    shortestPath(start, end) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};

        // Build up initial state
        for (let vertex in this.adjacencyList) {
            const value = vertex === start ? 0 : Infinity;
        
            distances[vertex] = value;
            nodes.enqueue(vertex, value)
            previous[vertex] = null;
        }

        //  As long as here is something to visit
        while (nodes.values.length) {
            let smallest = nodes.dequeue().val;
            if (smallest === end) {
                
                let path = [];
                
                while(previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }

                return path.concat(smallest).reverse();
            };

            if (smallest || distances[smallest] !== Infinity) {
                for (let neighborIndex in this.adjacencyList[smallest]) {
                    //Find neighboring node
                    const neighbour = this.adjacencyList[smallest][neighborIndex];
                    const candidate = distances[smallest] + neighbour.weight;

                    if (candidate < distances[neighbour.node]) {
                        // updating new smallest distance to neighbour
                        distances[neighbour.node] = candidate;
                        // updating previous - how we got to the neighbour
                        previous[neighbour.node] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(neighbour.node, candidate);
                    }
                }
            }
        }
                
    }
}

const g = new WeightedGraph(); 

// g.addVertex('Kyiv');
// g.addVertex('Poltava');
// g.addVertex('Kharkiv');


// g.addEdge('Kyiv', 'Poltava', 5);
// g.addEdge('Kyiv', 'Kharkiv', 12);
// g.addEdge('Kharkiv', 'Poltava', 6);


g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A","B", 4);
g.addEdge("A","C", 2);
g.addEdge("B","E", 3);
g.addEdge("C","D", 2);
g.addEdge("C","F", 4);
g.addEdge("D","E", 3);
g.addEdge("D","F", 1);
g.addEdge("E","F", 1);


g.shortestPath('A', 'E');