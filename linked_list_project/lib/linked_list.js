// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	// TODO: Implement the addToTail method here
	addToTail(val) {
		let node = new Node(val);

		if (!this.head) {
			this.head = node; // if no head, set head to node
		} else {
			this.tail.next = node; // if there is a head, add node to tail
		}

		this.tail = node; // reset tail to be new node, then add length by 1
		this.length++;
		return this;
	}

	// TODO: Implement the removeTail method here
	removeTail() {
		if (this.length === 0) {
			return undefined;
		} else if (this.length === 1) {
			let oldTail = this.tail;
			this.head = null;
			this.tail = null;
			this.length --;
			return oldTail;
		}

		let currentTail = this.tail;
		let currentNode = this.head

		while (currentNode.next !== currentTail) {
			currentNode = currentNode.next;
		}

		currentNode.next = null;
		this.tail = currentNode;
		this.length --;
		return currentTail;
	}

	// TODO: Implement the addToHead method here
	addToHead(val) {
		let newHead = new Node(val);

		if (!this.head) {
			this.head = newHead; // if no head, set head to node
			this.tail = newHead;
		} else {
			newHead.next = this.head;
			this.head = newHead;
		}

		this.length++;
		return this;
	}

	// TODO: Implement the removeHead method here
	removeHead() {
		if (this.length === 0) {
			return undefined
		} else if (this.length === 1) {
			let oldHead = this.head;
			this.head = null;
			this.tail = null;
			this.length--;
			return oldHead;
		}

		let oldHead = this.head;
		let newHead = this.head.next;
		this.head = newHead;
		this.length--;
		return oldHead
	}

	// TODO: Implement the contains method here
	contains(target) {
		let currentNode = this.head;
		while (currentNode) {
			if (currentNode.value === target) {
				return true;
			} else {
				currentNode = currentNode.next;
			}
		}
		return false;
	}

	// TODO: Implement the get method here
	get(index) {
		if (index > this.length) return null;
		let currentNode = this.head;
		while (index > 0) {
			currentNode = currentNode.next;
			index--;
		}
		return currentNode;
	}

	// TODO: Implement the set method here
	set(index, val) {
		if (index >= this.length) return false;
		let currentNode = this.head;
		while (index > 0) {
			currentNode = currentNode.next;
			index--;
		}
		currentNode.value = val;
		return true;
	}

	// TODO: Implement the insert method here
	insert(index, val) {
		if (index >= this.length) return false;
		let currentNode = this.head;
		while (index > 1) {
			currentNode = currentNode.next
			index--;
		}

		let newNode = new Node(val);
		newNode.next = currentNode.next;
		currentNode.next = newNode;
		this.length++;
		return true;
	}

	// TODO: Implement the remove method here
	remove(index) {
		if (index > this.length) return undefined;
		
		let currentNode = this.head;
		while (index > 1) {
			currentNode = currentNode.next;
			index--;
		}

		let nextNode = currentNode.next;
		currentNode.next = nextNode.next;
		this.length--;
		return nextNode;
	}

	// TODO: Implement the size method here
	size() {
		return this.length;
	}
}

exports.Node = Node;
exports.LinkedList = LinkedList;
