function recursionFactorial(n) {
    
    //base case
    if (n === 0) {
        return 1;
    }

    //recursion case
    return (n * recursionFactorial(n - 1));
}

console.log(recursionFactorial(5));