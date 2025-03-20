class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  addVertex(node) {
    if (this.adjacentList[node]) {
      throw new Error('Already exists');
    }
  
    this.adjacentList[node] = [];
    this.numberOfNodes++;

    return this;
  }

  addEdge(node1, node2) {
    if (!this.adjacentList[node1] || !this.adjacentList[node2]) {
      throw new Error('Node is incorrect');
    }

    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);

    return this;
  }

  showConnections() {
    for (let key in this.adjacentList) {
      console.log(`${key} --> ${this.adjacentList[key].join(' ')}`);
    }
  }
}

const myGraph = new Graph();
myGraph.addVertex('0');
myGraph.addVertex('1');
myGraph.addVertex('2');
myGraph.addVertex('3');
myGraph.addVertex('4');
myGraph.addVertex('5');
myGraph.addVertex('6');
myGraph.addEdge('3', '1');
myGraph.addEdge('3', '4');
myGraph.addEdge('4', '2');
myGraph.addEdge('4', '5');
myGraph.addEdge('1', '2');
myGraph.addEdge('1', '0');
myGraph.addEdge('0', '2');
myGraph.addEdge('6', '5');
myGraph.showConnections();