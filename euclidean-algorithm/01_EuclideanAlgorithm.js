let number1 = 640;
let number2 = 1680;

function euclideanAlgorithm(a, b) {
    if (a === b) {
        return console.log('Числа ' + a + ' и ' + b + ' равны, поэтому наибольший общий делитель равен так же ' + a);
    }

    console.log('Ищем наибольший общий делитель чисел ' + number1 + ' и ' + number2);
    while (a && b) {
        if (a > b) {
            a = a % b;
        } else {
            b = b % a;
        }
        console.log(a + ' ' + b);
        console.log('----------------');
    }
    
    return console.log('Наибольший общий делитель чисел ' + number1 + ' и ' + number2 + ' равен ' + (a + b));
}

euclideanAlgorithm(number1, number2);