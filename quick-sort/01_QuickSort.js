let unsortedArray = [1, 21, 5, 17, 19, 2, 14, 10, 23];

function quickSort(array) {
    console.log('Массив на входе ' + array);
    if (array.length <= 1) {
        return array;
    }

    //делим текущий массив пополам, и определяем опорный элемент
    let pivot = Math.floor(array.length / 2);

    //объявляем два массива для элементов меньше и больше опорного
    let less = [];
    let greater = [];
    console.log('Опорный элемент ' + array[pivot]);

    for (let i = 0; i < array.length; i++) {
        if (i === pivot) continue;
        if (array[i] < array[pivot]) {
            less.push(array[i]);
        } else {
            greater.push(array[i]);
        }
    }
    console.log('Массив с элементами меньше опорного ' + less);
    console.log('Массив с элементами больше опорного ' + greater);

    let sortedArray = [];
    console.log('------------------');
    return sortedArray.concat(quickSort(less), array[pivot], quickSort(greater));
}

console.log('Сортированный массив ' + quickSort(unsortedArray));