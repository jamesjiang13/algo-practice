function breadthFirstArray(root) {
	if (!root) return [];
	let res = [];
	let queue = [root];
	while (queue.length) {
		let node = queue.shift();
		res.push(node.val)
		if (node.left) queue.push(node.left);
		if (node.right) queue.push(node.right);
	} 
	return res;
} 


module.exports = {
	breadthFirstArray
};