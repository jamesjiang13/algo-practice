function binarySearch(array, target) {
	if (array.length === 0) return false;

	let mid = Math.floor(array.length / 2)
	if (array[mid] === target) return true;

	if (array[mid] > target) {
		let left = array.slice(0, mid);
		return binarySearch(left, target);
	} else {
		let right = array.slice(mid+1);
		return binarySearch(right, target);
	}
}


function binarySearchIndex(array, target) {
	if (array.length === 0) return -1;
	
	let midIdx = Math.floor(array.length / 2)
	if (array[midIdx] === target) return midIdx;

	if (array[midIdx] > target) {
		let left = array.slice(0, midIdx);
		return binarySearchIndex(left, target);
	} else if (array[midIdx] < target) {
		let right = array.slice(midIdx+1);
		let rightSearch = binarySearchIndex(right, target);
		return (rightSearch === -1) ? -1 : midIdx + rightSearch + 1;
	}
}

console.log(binarySearchIndex([5, 10, 12, 15, 20, 30, 70], 12))


module.exports = {
	binarySearch,
	binarySearchIndex
};