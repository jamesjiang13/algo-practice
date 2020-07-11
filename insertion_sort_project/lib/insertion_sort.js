function insertionSort(arr) {
	for (i = 1; i < arr.length; i++) {
		let currentEle = arr[i];
		console.log(`currentEle: ${currentEle}`)
		for (j = i-1; j >= 0 && currentEle < arr[j]; j--) {
			console.log(`j: ${j}`)
			console.log(`arr[j]: ${arr[j]}`)
			console.log(`arr[j+1]: ${arr[j+1]}`)
			arr[j+1] = arr[j]
			console.log(`working array: ${arr}`)
		}
		arr[j+1] = currentEle; 
		console.log(`array: ${arr}`)
		console.log("--")
	}
	return arr
}

insertionSort([2, -1, 4, 3, 1, 7, 3, 5, 44, 7, 3])
				
module.exports = {
  insertionSort
};

/* notes
Insertion sort is an online sort, meaning it is best at sorting data that's always changing.
Imagine the scenario where the array is fully sorted and you add one additional element. Then
the sort time is O(1). Online sorts are preferred when you have constant inputs into a mostly sorted
array.
*/