let unsortedArray = [1, 21, 5, 17, 19, 2, 14, 10, 23];

function quickSort(array, left = 0, right = (array.length - 1)) {
    if (array.length <= 1) {
        return array;
    }
    console.log('Массив на входе ' + array);
    
    //задаём левый и правый индексы
    //передаются в момент вызова функции
    console.log('Левый индекс стартовый - ' + left + ' | ' + right + ' - Правый индекс стартовый');
    console.log('Левый элемент стартовый- ' + array[left] + ' | ' + array[right] + ' - Правый элемент стартовый');
    let l = left;
    let r = right;

    //делим текущий массив пополам, и определяем опорный элемент
    let pivot = Math.floor((l + r) / 2);
    console.log('Опорный элемент - ' + array[pivot] + ' | ' + pivot + ' - индекс опорного элемента');
    console.log('--------------------------');

    do {
        while (array[l] < array[pivot]) {
            console.log('Левый элемент - ' + array[l] + ' | ' + l + ' - индекс');
            l++;
        }
        console.log('Левый элемент ' + array[l] + ' больше опорного элемента ' + array[pivot]);

        while (array[r] > array[pivot]) {
            console.log('Правый элемент - ' + array[r] + ' | ' + r + ' - индекс');
            r--;
        }
        console.log('Правый элемент ' + array[r] + ' меньше опорного элемента ' + array[pivot]);

        if (l <= r) {
            console.log('Меняем местами - ' + array[l] + ' и ' + array[r]);
            let tmp = array[l];
            array[l] = array[r];
            array[r] = tmp;
            l++;
            r--;
            console.log('Массив после обмена ' + array);
            console.log('========================')
        }

    } while (l < r);

    if (left < r) {
        quickSort(array, left, r);
    }
    if (right > l) {
        quickSort(array, l, right);
    }

    return array;
}

console.log('Сортированный массив ' + quickSort(unsortedArray));