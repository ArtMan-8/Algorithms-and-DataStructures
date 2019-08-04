var sortedArray = [1, 3, 5, 7, 8, 10];
var targetValue = 3;

function binarySearch (array, value) {
    let min = 0;
    let max = array.length-1;

    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        console.log(min + ' ' + max + ' | ' + mid);
        if (value === array[mid]) {
            return console.log('Искомое число ' + value + ', на позиции ' + mid);
        } else if (value < array[mid]) {
            max = mid;
        } else {
            min = mid;
        }

    }
}

binarySearch(sortedArray, targetValue);