// what digit is at the given place value in num
function getDigitFrom(num, place) { 
	return Math.floor(Math.abs(num) / 10 ** place ) % 10;
}

// how many digits are in num
function getIntLength(num) {
	return num.toString().split('').length
}

// How many digits does the integer with the most digits have?
function getMaxDigits(nums) {
	let maxLength = 0;
	nums.forEach((num) => {
		let numLength = getIntLength(num)
		if (numLength > maxLength) maxLength = numLength;
	})
	return maxLength
}

function radixSort(arr) {
	if (!Array.isArray(arr)) return null;
	let maxDigits = getMaxDigits(arr);

	for (k = 0; k < maxDigits; k++) { // k number of times, where k is the count of digits. maxDigit = 987, k = 3;
		let buckets = Array.from({length: 10}, () => []) ; // create new buckets

		for (i = 0; i < arr.length; i++) { // to iterate over ever element of the array
			let el = arr[i];
			let digit = getDigitFrom(el, k); // get the k-th digit of element
			buckets[digit].push(el) // add that element to the correct digit bucket
		}

		arr = [].concat(...buckets); // now that buckets are correct, remove nested arrays
	}

	return arr
}

module.exports = {
	radixSort
};