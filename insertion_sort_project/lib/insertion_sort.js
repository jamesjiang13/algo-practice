function insertionSort(arr) {
	for (i = 1; i < arr.length; i++) {
		let currentEle = arr[i];
		console.log(`currentEle: ${currentEle}`)
		for (j = i-1; j >= 0 && currentEle < arr[j]; j--) {
			console.log(`j: ${j}`)
			console.log(`arr[j]: ${arr[j]}`)
			console.log(`arr[j+1]: ${arr[j+1]}`)
			arr[j+1] = arr[j]
		}
		arr[j+1] = currentEle; 
		console.log(`array: ${arr}`)
		console.log("--")
	}
	return arr
}

insertionSort([2, -1, 4, 3, 7, 3])
				
module.exports = {
  insertionSort
};