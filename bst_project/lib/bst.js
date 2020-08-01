class TreeNode {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}


class BST {
	constructor() {
		this.root = null;
	}

	insert(val, root = this.root) {
		if (!root) {
			this.root = new TreeNode(val)
			return;
		}
		
		if (val < root.val) {
			if (!root.left) {
				root.left = new TreeNode(val);
			} else {
				this.insert(val, root.left);
			}
		} else {
			if (!root.right) {
				root.right = new TreeNode(val);
			} else {
				this.insert(val, root.right);
			}
		}
	}

	searchRecur(val, root = this.root) {
		if (!root) return false;

		if (root.val > val) {
			return this.searchRecur(val, root.left)
		} else if (root.val < val) {
			return this.searchRecur(val, root.right)
		} else {
			return true;
		}
		return false;
	}

	searchIter(val) {
		if (!this.root) return false;

		let currentNode = this.root;
		while (currentNode) {
			if (currentNode.val > val) {
				currentNode = currentNode.left;
			} else if (currentNode.val < val) {
				currentNode = currentNode.right;
			} else {
				return true;
			}
		}
		
		return false;
	}
}

module.exports = {
	TreeNode,
	BST
};