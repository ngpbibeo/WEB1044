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
      "Bạn không được để trống email";
    return false;
  } else if (!(email.includes(".") && email.includes("@"))) {
    document.getElementById("errEmail").innerText =
      "Email không đúng định dạng";
    return false;
  } else {
    document.getElementById("errEmail").innerText = "";
  }
  if (soDT.trim() == "" || isNaN(soDT)) {
    document.getElementById("errSoDT").innerText = "Số điện thoại không hợp lệ";
    return false;
  } else {
    document.getElementById("errSoDT").innerText = "";
  }

  return true;
}
function tinhTien() {
  document.getElementById("giaSP").value =
    document.getElementById("loaiHang").value;
  document.getElementById("thanhTien").value =
    document.getElementById("loaiHang").value *
    document.getElementById("soLuong").value;

  const ships = document.querySelectorAll(".ship");
  ships.forEach((item) => {
    if (item.checked == true) {
      document.getElementById("phiShip").value = item.value;
    }
  });
  let tongPhuKien = 0;
  const phuKien = document.querySelectorAll(".phuKien");
  phuKien.forEach((item) => {
    if (item.checked == true) {
      tongPhuKien =
        tongPhuKien + item.value * document.getElementById("soLuong").value;
    }
  });
  console.log(tongPhuKien);
  document.getElementById("thanhTien").value =
    document.getElementById("loaiHang").value *
      document.getElementById("soLuong").value +
    document.getElementById("phiShip").value * 1 +
    tongPhuKien;
}
