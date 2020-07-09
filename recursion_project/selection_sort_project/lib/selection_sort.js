function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}   

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) { // cycle through the array
        let minIdx = i; // 

        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                minIdx = j; // reset min of right side to j
            }
        }
        swap(arr, i, minIdx);
    }
    return arr;
}

module.exports = {
    selectionSort,
    swap
};