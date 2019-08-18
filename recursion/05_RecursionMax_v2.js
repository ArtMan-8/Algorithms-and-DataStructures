let array = [1, 21, 5, 27, 19, 2, 14, 10, 2];
let max = array[0];

function recursionMax(arr) {

    //base case
    if (arr.length === 2) {
        return arr[0] > arr[1] ? arr[0] : arr[1];
    }

    //recursion case
    max = recursionMax(arr.slice(1));
    return arr[0] > max ? arr[0] : max;
}

console.log('Максимальный элемент массива ' + recursionMax(array));