let array = [1, 21, 5, 27, 19, 2, 14, 10, 2];
let max = array[0];

function recursionMax(arr) {

    //base case
    if (arr.length === 2) {
        if (arr[0] > arr[1]) {
            max = arr[0];
            console.log('Текущий массив ' + arr);
            console.log('Максимум в текущем массиве ' + max);
            console.log('-----------');
            return max;
        } else {
            max = arr[1];
            console.log('Текущий массив ' + arr);
            console.log('Максимум в текущем массиве ' + max);
            console.log('-----------');
            return max;
        }
    }

    //recursion case
    max = recursionMax(arr.slice(1));
    if (arr[0] > max) {
        max = arr[0];
        console.log('Текущий массив ' + arr);
        console.log('Максимум в текущем массиве ' + max);
        console.log('-----------');
        return max;
    } else {
        max = max;
        console.log('Текущий массив ' + arr);
        console.log('Максимум в текущем массиве ' + max);
        console.log('-----------');
        return max;
    }
}
/* т.к. стек вызовов сворачивается с последнего,
видим результат сравнения элементов с конца массива */
console.log('Максимальный элемент массива ' + recursionMax(array));