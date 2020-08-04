function breadthFirstSearch(startingNode, targetVal) {
	let visited = new Set;
	let queue = [ startingNode ];
	
	while (queue.length) {
		let currentNode = queue.shift();

		if (visited.has(currentNode)) continue;
		visited.add(currentNode)

		if (currentNode.val === targetVal) {
			return currentNode;
		} else {
			queue.push(...currentNode.neighbors);
		}
	}

	return null;
}

module.exports = {
  breadthFirstSearch
};