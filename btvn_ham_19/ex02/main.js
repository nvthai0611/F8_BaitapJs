var daoSo = function (n) {
    var results = 0, temp = 0;
    while (n > 0) {
        temp = n % 10;
        results = results * 10 + temp;
        n = Math.floor(n / 10); 
    }
    return results;
}

var n = 12345;
console.log(daoSo(n)); 