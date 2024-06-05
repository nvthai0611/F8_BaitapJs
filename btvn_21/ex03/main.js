var a = [1,3,4,2,2,1,2,3,4,5, 6 ,6 ];
var newArr = [];

for(var i in a){
    if(newArr.indexOf(a[i]) === -1){
        newArr[newArr.length] = a[i];
    }
}

console.log(newArr);