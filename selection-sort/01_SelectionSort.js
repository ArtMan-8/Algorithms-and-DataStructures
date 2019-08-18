let unsortedArray = [1, 21, 5, 17, 19, 2, 14, 10, 23];

function selectionSort(array) {
    for (let min = 0; min < array.length - 1; min++) {
        let least = min;

        for (let current = min + 1; current < array.length; current++) {
            console.log('Индексы переборов - ' + min + ' ' + current);
            console.log('Массив до обмена - ' + array);
            if (array[current] < array[least]) {
                least = current;
                console.log('Найдено наименьшее ' + array[least] + ', на позиции ' + least);
            }
            console.log('---------------');
        }

        let tmp = array[min];
        array[min] = array[least];
        array[least] = tmp;
        console.log('Массив после обмена - ' + array);
        console.log('================');
    }

    return console.log('Сортированный массив - ' + array);
}

selectionSort(unsortedArray);