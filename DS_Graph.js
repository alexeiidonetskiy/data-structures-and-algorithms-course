class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) { 
            this.adjacencyList[vertex] = [];
        } 
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
        
    }

    removeVertex(vertex) {        
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];
    }

    depthFirstSearch_Recursive(start) {
        const list = this.adjacencyList;
        const result = [];
        const visited = {};
        
        (function helper (vertex) {
            if (!vertex) { return };

            result.push(vertex);
            visited[vertex] = true;

            for (let i = 0; i < list[vertex].length; i++) {
                let neighbor = list[vertex][i];
                if (!visited[neighbor]) {
                    helper(neighbor)
                }
            }
            
        })(start);

        return result;
        
    }

    depthFirstSearch_Iterative(start) {
        let stack = [start]; // push, pop
        let visited = {[start]: true};
        let result = [];
        
        
        while (stack.length) {
            let vertex = stack.pop();
            result.push(vertex);
            
            for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
                let neighbor = this.adjacencyList[vertex][i];
                

                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            }
        }

        return result;
    }

    breadthFirstSearch_Iterative (start) {
        let queue = [start]; // push, shift
        let result = [];
        let visited = { [start]: true };


        while(queue.length) {
            let vertex = queue.shift();
            result.push(vertex);

            for (let i = 0; i < this.adjacencyList[vertex].length; i++) {
                let neighbor = this.adjacencyList[vertex][i];
                

                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
            
        }

        return result;
    }
    
}

const g = new Graph();

g.addVertex("Kyiv");
g.addVertex("Kharkiv");
g.addVertex("Poltava");
g.addVertex("Lviv");
g.addVertex("Odessa")

g.addEdge("Kyiv", "Kharkiv");
g.addEdge("Kyiv", "Poltava");
g.addEdge("Odessa", "Kharkiv");
g.addEdge("Odessa", "Kyiv");
g.addEdge("Lviv", "Odessa");
g.addEdge("Lviv", "Poltava");

console.log(g.adjacencyList);

g.depthFirstSearch_Iterative("Kyiv");