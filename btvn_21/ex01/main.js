var arr = [4 , 1 , 1 , 2 , 6 , 4 , 5 , 6];
var max = arr[0];
var min = arr[0];
var posMax = [];
var posMin = [];

for(var i in arr){
    if(max < arr[i]){
        max = arr[i];
        posMax = [i];
    } else if(max === arr[i]){
        posMax[posMax.length] = i;
    }
    if(min > arr[i]){
        min = arr[i];
        posMin = [i];
    } else if(min === arr[i]){
        posMin[posMin.length] = i;
    }

}

console.log(max);
console.log(posMax);
console.log(min);
console.log(posMin);