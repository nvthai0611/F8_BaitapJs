/*
Viết 1 hàm trả về 1 đối tượng có 3 thuộc tính: name, age, address

Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tượng để khởi tạo ra một mảng mới chứa các đối tượng có cấu trúc như trên.

Kết quả trả về là một mảng chứa tất cả thông tin của các đối tượng đó được sắp xết tăng dần theo tuổi và thêm một thuộc tính mới là shortName của mỗi đối tượng.
*/

// Viết 1 hàm trả về 1 đối tương có 3 thuộc tính: name, age, address
function createCustomer(name, age, address){ 
    var customer = {
        name: name,
        age : age,
        address: address,
    }
    return customer;
}
// Sau đó viết một hàm nhận vào một mảng chứa nhiều đối tương có cấu trúc như trên.

function createCustomers(listCustomer) {
    // lưu trữ mảng customer mới
    var newArrCustomer = [];
    for(var i = 0; i < listCustomer.length; i++){
        var customer = createCustomer(listCustomer[i].name, listCustomer[i].age, listCustomer[i].address);
        var partNames = customer.name.split(" ");
        var shortName = "";
        for(var j = 0; j < partNames.length; j++){
            if(j === 0 || j === partNames.length - 1){
                shortName += partNames[j];
            } else {
                shortName += " ";
            }
        }
        customer.shortName = shortName.trim();
        newArrCustomer.push(customer);
    }

    newArrCustomer.sort(function (a, b) {
        return a.age - b.age;
    })
    return newArrCustomer;
};

const customers = [
    { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
    { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
  ];
  
var results = createCustomers(customers);
console.log(results);

