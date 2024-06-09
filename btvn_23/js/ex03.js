/*
Viết 1 hàm trả về 1 đối tượng có 3 thuộc tính: name, password và email.
Tạo một hàm register nhận vào nhiều tham số để khởi tạo ra một mảng chứa các đối tượng có cấu trúc như trên.
Yêu cầu:
Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.
Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.
Tự động thêm role là user cho mỗi đối tượng.
Tạo một hàm login nhận vào 2 tham số email và password.
Yêu cầu:
Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký, trả về thông tin của đối tượng đó.
Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.
 */

var data = [];
function user(name, password , email) {
    var account = {
        name: name,
        password: password,
        email: email,
    }
    return account;
};

function handleRegister(name, password, email) {
    if(!name || !password || !email) {
        throw new Error("Vui lòng nhập đầy đủ thông tin");
    } 
    if(data.length === 0)   {
        data.push(user(name, password, email));
    } else {
        for(var i in data) {
            if(data[i].email === email) {
                throw new Error("Email đã đăng ký");
            }
        }
        data.push(user(name, password, email));
    }
    
}

function handleLogin(email, password) {
    for(var i in data){
        if(data[i].email === email && data[i].password === password) {
            return data[i];
        }
    } 
    throw new Error("tài khoản không hợp lệ");
}

handleRegister("Tiến Hải", "123456", "nvthai061105@gmail");

console.log(handleLogin("nvthai061105@gmail", "123456"));


