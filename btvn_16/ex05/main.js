var a = 5, b = 1 , c = 2;
var min , mid , max;

if(a <=b && a <= c){
    min = a;
    if(b <= c){
        mid = b;
        max = c;
    } else {
        mid = c;
        max = b;
    }
} else if( b <= a && b <= c){
    min = b;
    if(a <= c){
        mid = a;
        max = c;
    } else {
        mid = c;
        max = a;
    }
} else {
    min = c;
    if(b <= a){
        mid = b;
        max = a;
    } else{
        mid = a;
        max = b;
    }
}

console.log(`Thứ tự tăng dần của 3 số là: ${min} -> ${mid} -> ${max}`);