const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

// or

function selectionSort(array) {
    const length = array.length;
    for (let i = 0; i < length; i++) {
        // set current index as minimum
        let min = i;
        let temp = array[i];
        for (let j = i + 1; j < length; j++) {
            if (array[j] < array[min]) {
                //update minimum if current is lower that what we had previously
                min = j;
            }
        }
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}
