
// Cách 1 
var a = 5, b = 6;
console.log(`Trước khi hoán vị: a = ${a} , b = ${b}`);
a = a + b;
b = a - b;
a = a - b;
console.log(`Sau khi hoán vị: a = ${a} , b = ${b}`);

// Cách 2:
 
var c = 5 , d = 6;
c = c * d;
d = c / d;
c = c / d;
console.log(c);

// Cách 3: Toán tử xor đổi bit nhị phân
var x = 5, y = 6;
x = x ^ y;
y = x ^ y;
x = x ^ y;
console.log(x);
