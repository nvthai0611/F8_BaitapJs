var money_tax = 11000, money_km = 130;
var discount = 0;
var total = 0;

if(money_km <= 1){
    money_tax = 15000;
} else if(money_km > 1 && money_km <= 5){
    money_tax = 13500;
} else{
    if (money_km > 120) {
        discount = 0.1*(money_km * money_tax);
    }
}
total = (money_km * money_tax) - discount;
console.log(`Số tiền thanh thoán: ${total}`);

