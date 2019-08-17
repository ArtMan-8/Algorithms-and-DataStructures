let array = [1, 21, 5, 17, 19, 2, 14, 10, 23];

function recursionCount(arr) {

    //base case
    if (arr.length === 0) {
        return 0;
    }

    //recursion case
    return 1 + recursionCount(arr.slice(1));
}

console.log(recursionCount(array));