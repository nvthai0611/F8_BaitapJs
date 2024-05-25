var money_elec = 2.927, number_kwwh = 51;
var total = 0;
if(number_kwwh > 0 && number_kwwh <= 50){
    money_elec = 1.678;
} else if(number_kwwh > 50 && number_kwwh <= 100){
    money_elec = 1.734;
} else {
    money_elec = 2.927;
}

total = money_elec * number_kwwh;
console.log(`Tiền điện cần thanh toán: ${total}`);