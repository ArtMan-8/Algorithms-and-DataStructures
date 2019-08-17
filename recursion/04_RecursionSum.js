let array = [1, 21, 5, 17, 19, 2, 14, 10, 23];
let sum = 0;

function recursionSum(arr) {

    //base case
    if (arr.length === 1) {
        return arr[0];
    }

    //recursion case
    sum = arr[0] + recursionSum(arr.slice(1));
    console.log('1й элемент массива в текущей интерации ' + arr[0]);
    console.log('Оставшийся элементы массива в текущей интерации ' + arr.slice(1));
    console.log('Сумма элементов массива в текущей интерации ' + sum);
    console.log('--------');
    /* т.к. стек вызовов сворачивается с последнего,
    видим результат сложения с конца массива */
    return sum;
}

console.log('Сумма элементов массива ' + recursionSum(array));