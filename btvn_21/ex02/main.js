var a = [1,2,4,4,4,4,4,4,4];
var newArr =[];
var sumPrime = 0;
var hasPrime = false;
function isPrice(n){
    if(n <= 1) return false;
    if(n ===2 || n===3) return true;
    for(var i = 2; i < n; i++){
        if(n % i === 0) return false;
    }
    return true;
}
for(var i in a){
    if(isPrice(a[i])){
        newArr[newArr.length] = a[i];
        hasPrime = true;
    }
}
if(!hasPrime){
    console.log(`Không có số nguyên tố`);
} else {
    for(var i in newArr){
        sumPrime += newArr[i];
    }
    console.log(newArr);
    console.log(sumPrime);
}


