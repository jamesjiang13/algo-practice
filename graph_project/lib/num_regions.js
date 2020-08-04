function numRegions(graph) {
	let regions = 0;
	let visited = new Set;

	for (let node in graph) {
		if (isNewRegion(node, graph, visited)) regions++;
	}

	return regions;
}

function isNewRegion(node, graph, visited = new Set) {
	if (visited.has(node)) return false;
	visited.add(node);
	graph[node].forEach(neighbor => {
		return isNewRegion(neighbor, graph, visited);
	})
	return true;
}

module.exports = {
	numRegions
};