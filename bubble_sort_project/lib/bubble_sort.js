function swap(array, idx1, idx2) {
   [array[idx1], array[idx2]] = [array[idx2], array[idx1]]
   return array;
}

function bubbleSort(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (i = 0; i < array.length-1; i++) {
            if (array[i] > array[i+1]) {
                sorted = false
                swap(array, i, i+1)
            }
        }
    }
    return array;
}

module.exports = {
    bubbleSort,
    swap
};