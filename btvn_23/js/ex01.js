const errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
};
/*
    Hướng làm errors["field"] == in ra giá trị của lỗi, mặc định là require 
    nếu độ dài là 1 thì trả về required còn ko thì trả về lỗi đúng như yêu cầu
    console.log(errors[field].required);
    => cách nhau bởi dấu . vậy nên khi vào mảng nó sẽ là chuỗi 
*/


function getErrors(field) {
    var fields = field.split(".");
    var errorCommon = errors[fields[0]];
    if(fields.length > 1){
        return errorCommon[fields[1]];
    } else {
        return errorCommon.required;
    }
}

console.log(getErrors("email.unique"));

