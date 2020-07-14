function countingSort(arr, max) {
	let countArray = new Array(max+1).fill(0);
	let resArray = new Array;
	arr.forEach((el) => countArray[el]++)

	for (i=0; i <= countArray.length; i++) {
		while (countArray[i] > 0) {
			resArray.push(i);
			countArray[i]--;
		}
	}

	return resArray;
}

module.exports = {
	countingSort
};

