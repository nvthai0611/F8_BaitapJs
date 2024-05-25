
function isPrice(n) {
    if(n < 2)  return false;
    if(n === 2 || n === 3) return true;
    if(n > 3){
        for(var i = 2; i < n ; i++ ){
            if(n % i === 0){
                return false;
            }
        }
    }
    return true;
}


var n = 17;
for(var i = 1; i <= n; i++){
    if(isPrice(i)){
        console.log(`${i} là số nguyên tố`);
    }
}