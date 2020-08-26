// basic dijkstra to find least distance
function dijkstra(graph, source) {
  let distance = {}; // all distances are from the source to node
  for (let node in graph) {
    distance[node] = Infinity;
  }
  distance[source] = 0;

  let unvisited = new Set(Object.keys(graph));
  
  while (unvisited.size > 0) { // need to choose node with smallest value
    let currNode = getSmallestNode(unvisited, distance)
    unvisited.delete(currNode)

    for (let neighbor in graph[currNode]) {
      let distanceToNeighbor = graph[currNode][neighbor]
      let totalDistance = distanceToNeighbor + distance[currNode]
      if (totalDistance < distance[neighbor]) distance[neighbor] = totalDistance;
    } 
  }
  return distance
}

function getSmallestNode(unvisited, distances) {
  return Array.from(unvisited).reduce((minNode, node) => {
    return (distances[node] < distances[minNode] ? node : minNode )
  })
}

// let test = new Set(['a','b','c'])
// let dist = {'a':5,'b':2,'c':4}
// console.log(getSmallestNode(test, dist))

let graph = {
    'a': { 'c': 1, 'b': 7 },
    'b': { 'a': 7, 'd': 12, 'e': 13 },
    'c': { 'a': 1, 'd': 20, 'f': 4 },
    'd': { 'b': 12, 'c': 20, 'e': 5 },
    'e': { 'b': 13, 'd': 5, 'f': 9 },
    'f': { 'c': 4, 'e': 9 }
};

console.log(dijkstra(graph, 'a'));