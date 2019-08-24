let number1 = 640;
let number2 = 1680;

function euclideanAlgorithm(a, b) {
    if (a === 0 || b === 0) {
        return console.log('Наибольший общий делитель чисел ' + number1 + ' и ' + number2 + ' равен ' + (a || b));
    }

    if (a > b) {
        return euclideanAlgorithm(a % b, b);
    } else if (b > a) {
        return euclideanAlgorithm(a, b % a);
    } else {
        return console.log('Числа ' + a + ' и ' + b + ' равны, поэтому наибольший общий делитель равен так же ' + a);
    }
}

euclideanAlgorithm(number1, number2);