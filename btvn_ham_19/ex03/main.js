function chuyenSoThanhChu(n) {
  var chuSo = [
    "",
    "một",
    "hai",
    "ba",
    "bốn",
    "năm",
    "sáu",
    "bảy",
    "tám",
    "chín",
  ];
  var hang = ["", "nghìn", "triệu", "tỷ"];

  var docSo = function (so) {
    var hangChuc = Math.floor(so / 10) % 10;
    var hangDonVi = so % 10;
    var hangTram = Math.floor(so / 100) % 10;
    var chuoi = "";
    if (hangTram > 0) {
      chuoi += chuSo[hangTram] + " trăm ";
    }

    if (hangChuc === 1) {
      chuoi += "mười ";
      if (hangDonVi > 0) {
        chuoi += chuSo[hangDonVi];
      }
    } else if (hangChuc > 1) {
      chuoi += chuSo[hangChuc] + " mươi ";
      if (hangDonVi > 0) {
        chuoi += chuSo[hangDonVi];
      }
    } else {
      if (hangDonVi > 0) {
        chuoi += chuSo[hangDonVi];
      }
    }
    return chuoi;
  };

  var ketQua = "";
  if (n === 0) {
    ketQua = "không";
  } else {
    for (var i = 0; n > 0; i++) {
      var temp = n % 1000;
      if (temp > 0) {
        ketQua = docSo(temp) + " " + hang[i] + " " + ketQua;
      }
      n = Math.floor(n / 1000);
    }
  }

  return ketQua.trim();
}

// Test với số 4298
var so = 4298;
console.log("Số " + so + ": " + chuyenSoThanhChu(so));
