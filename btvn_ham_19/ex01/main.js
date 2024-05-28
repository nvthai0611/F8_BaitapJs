var fibonanci = function (n) {
    if(n === 1 || n ===2) return 1;
    return fibonanci(n - 1) + fibonanci(n - 2);
}

var results = fibonanci(5);
console.log(results);