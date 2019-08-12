function recursionCountdown(n) {
    console.log(n);

    //base case
    if (n === 0) {
        return;
    } //recursion case
    else {
        recursionCountdown(n - 1);
    }
}

recursionCountdown(5);