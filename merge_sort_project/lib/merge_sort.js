// function merge(array1, array2) {
//     let merged = []
//     while (array1.length && array2.length) {
//         if (array1[0] < array2[0]) {
//             merged.push(array1.shift());
//         } else {
//             merged.push(array2.shift());
//         }
//     }
//     return merged.concat(array1, array2);
// }

// function mergeSort(array) {
//     if (array.length <= 1) return array;

//     let midIdx = Math.floor(array.length / 2);
//     let leftHalf = array.slice(0,midIdx)
//     let rightHalf = array.slice(midIdx);

//     let sortedLeft = mergeSort(leftHalf);
//     let sortedRight = mergeSort(rightHalf);
//     debugger
//     return merge(sortedLeft, sortedRight);
// }

// the point of this helper is to merge two SORTED arrays: [1] & [2] => [1,2] or [1,3,5] & [2,4,6] => [1,2,3,4,5,6]
function merge(array1, array2) {
	let res = [];
	while (array1.length && array2.length) {
		if (array1[0] < array2[0]) {
			res.push(array1.shift())
		} else {
			res.push(array2.shift())
		}
	}

	return res.concat(array1, array2);
}

// the point of this is to divide the input array
function mergeSort(arr) {
	let len = arr.length;
	if (len <= 1) return arr;

	let midIdx = Math.floor(len/2);
	let left = arr.slice(0,midIdx);
	let right = arr.slice(midIdx)

	let sortedLeft = mergeSort(left)
	let sortedRight = mergeSort(right)

	return merge(sortedLeft, sortedRight);
}

module.exports = {
	merge,
	mergeSort
};

// mergeSort([2, -1, 4, 3, 7, 3])