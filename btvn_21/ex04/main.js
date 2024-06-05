var numbers = [5,1,3,2,9, 8, 10];
var element = 11;
for (var i = 0; i < numbers.length; i++) {
    for (var j = 0; j < numbers.length - 1 - i; j++) {
        if (numbers[j] > numbers[j + 1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}

var pos = -1;
for(var i in numbers){
    if(element < numbers[i]){
        pos = i;
        break;
    }
}
if(pos !== -1){
    numbers = numbers.slice(0, pos).concat(element, numbers.slice(pos));
} else {
    numbers[numbers.length] = element;
}



console.log(numbers);
