var cloneGraph = function (graph) {
  function traverse(node) {
      if (!map.has(node.val)) {
          map.set(node.val, new Node(node.val))
          map.get(node.val).neighbors = node.neighbors.map(traverse)
      }
      return map.get(node.val)
  }
  
  let map = new Map()
  return graph ? traverse(graph) : graph
}