let sortedArray = [1, 2, 4, 5, 5, 8, 14, 15, 20];
let targetValue = 20;

function binarySearch(array, value) {
    console.log('Массив на входе ' + array);
    console.log('Искомое число - ' + value);
    console.log('----------------');

    let first = 0;
    let last = array.length-1;

    while (first <= last) {
        let mid = Math.floor(first + (last - first) / 2);
        
        //для просмотра изменнеий на каждом шаге поиска
        console.log('Начальный индекс - ' + first + ', конечный индекс - ' + last + ' | ' + mid + ' - срединный индекс');
        
        if (value === array[mid]) {
            return console.log('Искомое число ' + value + ', под индексом ' + mid);
        } else if (value < array[mid]) {
            last = mid - 1;
        } else {
            first = mid + 1;
        }
    }

    return console.log('Искомое число ' + value + ', не найдено')
}

binarySearch(sortedArray, targetValue);