function maxValue(node, visited=new Set()) {
	let maxVal = 0;
	let queue = [ node ];

	while (queue.length) {
		let currentNode = queue.shift();
		if (visited.has(currentNode)) continue;
		visited.add(node);
		if (currentNode.val > maxVal) {
			maxVal = currentNode.val;
		}
		queue.push(...currentNode.neighbors)
	}

	return maxVal;
}

module.exports = {
	maxValue
};