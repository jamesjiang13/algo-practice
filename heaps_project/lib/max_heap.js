class MaxHeap {
  constructor() {
		this.array = [null];
	}

	getParent(idx) {
		return Math.floor(idx/2);
	}

	getLeftChild(idx) {
		return idx * 2;
	}

	getRightChild(idx) {
		return idx * 2 + 1
	}

	siftUp(idx) {
		if (idx === 1) return; 
		/*
			get parent of idx
			compare to parent
			swap if bigger than parent, else done;
		*/
		
		let parentIdx = this.getParent(idx);
		if (this.array[parentIdx] < this.array[idx]) {
			[ this.array[parentIdx], this.array[idx] ] = [ this.array[idx], this.array[parentIdx] ]
			this.siftUp(parentIdx)
		}

	}

	insert(val) {
		this.array.push(val);
		this.siftUp(this.array.length - 1) // siftUp takes an index;
	}

	siftDown(idx) {
		let leftIdx = idx * 2;
		let rightIdx = idx * 2 + 1;
		let currentVal = this.array[idx];
		let leftVal = this.array[leftIdx];
		let rightVal = this.array[rightIdx];

		if (!leftVal) leftVal = -Infinity;
		if (!rightVal) rightVal = -Infinity;

		if (currentVal > leftVal && currentVal > rightVal) return;

		let swapIdx;
		if (leftVal > rightVal) {
			swapIdx = leftIdx
		} else {
			swapIdx = rightIdx
		}

		[ this.array[swapIdx], this.array[idx] ] = [ this.array[idx], this.array[swapIdx] ];
		this.siftDown(swapIdx);
	}

	deleteMax() {
		/*
			create ref to current max
			take last element of array and make it the new root
			implement siftdown on new root, idx=1
		*/
		if (this.array.length === 1) return null;
		if (this.array.length === 2) return this.array.pop();

		let max = this.array[1];
		this.array[1] = this.array.pop();
		this.siftDown(1)
		return max;
	}
}

module.exports = {
	MaxHeap
};