function depthFirstSearch(root, targetVal) {
	if (!root) return null;
	let queue = [ root ];
	while (queue.length) {
		let node = queue.pop();
		if (node.val === targetVal) return node;
		if (node.right) queue.push(node.right)
		if (node.left) queue.push(node.left)
	}
	return null;
}


module.exports = {
  depthFirstSearch
};