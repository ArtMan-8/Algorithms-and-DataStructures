let unsortedArray = [1, 21, 5, 17, 19, 2, 14, 10, 23];
let targetValue = 23;

function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (value === array[i]) {
            return console.log('Искомое число ' + value + ', на позиции ' + i);
        }
    }
    return console.log('Искомое число ' + value + ', не найдено');
}

linearSearch(unsortedArray, targetValue);