function validateForm(event) {
  const hoTen = document.getElementById("hoTen").value;
  const email = document.getElementById("email").value;
  const soDT = document.getElementById("soDT").value;
  if (hoTen.trim() == "") {
    document.getElementById("errHoTen").innerText =
      "Bạn không được để trống họ tên";
    return false;
  } else {
    document.getElementById("errHoTen").innerText = "";
  }
  if (email.trim() == "") {
    document.getElementById("errEmail").innerText =
      "Bạn không được để trống Email";
    return false;
  } else if (!(email.includes(".") && email.includes("@"))) {
    document.getElementById("errEmail").innerText =
      "Email không đúng dịnh dạng";
    return false;
  } else {
    document.getElementById("errEmail").innerText = "";
  }
  if (isNaN(soDT)) {
    document.getElementById("errSDT").innerText = "Số điện thoại phải là số";
    return false;
  } else {
    document.getElementById("errSDT").innerText = "";
  }
}

function tinhTien() {
  const giaSP = (document.getElementById("giaSP").value =
    document.getElementById("loaiHang").value);
  document.getElementById("thanhTien").value =
    document.getElementById("loaiHang").value *
    document.getElementById("soLuong").value;
}
