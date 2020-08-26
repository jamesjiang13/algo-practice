class Node {
	constructor() {
		this.children = {};
		this.isTerminal = false;
	}
}

class Trie {
	constructor() {
		this.root= new Node();
	}

	insertRecur(word, root=this.root) {
		let letter = word[0];

		if (!(letter in root.children)) {
			root.children[letter] = new Node();
		}

		if (word.length === 1) {
			root.children[letter].isTerminal = true;
		} else {
			this.insertRecur(word.slice(1), root.children[letter])
		}
	}

	insertIter(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			let letter = word[i];

			if (!(letter in node.children)) {
				node.children[letter] = new Node;
			}

			node = node.children[letter];
		}

		node.isTerminal = true;
	}

	searchRecur(word, root=this.root) {
		let letter = word[0];
		if (word.length === 0) return root.isTerminal;

		if (letter in root.children) {
			return this.searchRecur(word.slice(1), root.children[letter]);
		} else {
			return false;
		}
	}

	searchIter(word) {
		let node = this.root;

		for (let i = 0; i < word.length; i++) {
			let letter = word[i];

			if (!(letter in node.children)) {
				return false;
			} else {
				node = node.children[letter];
			}
		}

		return node.isTerminal
	}

	wordsWithPrefix(prefix, root=this.root) {
		let words = [];

		if (prefix === '') {
			if (root.isTerminal) words.push(''); // base case, 

			for (let letter in root.children) {
				let child = root.children[letter];
				let suffixes = this.wordsWithPrefix(prefix, child) // this is an array of all letters;
				let word = suffixes.map((suffix) => letter + suffix);
				words.push(...word)
			}

			return words;
		} else {
			if (root.isTerminal) words.push(''); // base case, 
			for (let letter in root.children) {
				if (letter in )
				let child = root.children[letter];
				let suffixes = this.wordsWithPrefix(prefix, child) // this is an array of all letters;
				let word = suffixes.map((suffix) => letter + suffix);
				words.push(...word)
			}
		}
	}
}

module.exports = {
	Node,
	Trie
};