// Bài 1
function isEven(n) {
  return n % 2 === 0;
}
console.log(isEven(4)); // true

// Bài 2
function tinhTienDien(kwh) {
  let tien =
    kwh <= 50
      ? kwh * 1800
      : kwh <= 100
        ? 50 * 1800 + (kwh - 50) * 2300
        : 50 * 1800 + 50 * 2300 + (kwh - 100) * 3000;
  return tien;
}
console.log(tinhTienDien(50).toLocaleString("vi-VN") + " VNĐ");
console.log(tinhTienDien(80).toLocaleString("vi-VN") + " VNĐ");
console.log(tinhTienDien(120).toLocaleString("vi-VN") + " VNĐ");

function tinhSoKwh(tien) {
  let kwh =
    tien <= 900000
      ? tien / 1800
      : tien <= 205000
        ? 50 + (tien - 90000) / 2300
        : 100 + (tien - 205000) / 3000;
  return kwh;
}
console.log(tinhSoKwh(910000) + " kWh");

// Bài 3

function tinhLuong(chucVu, ngayCongTT) {
  let luongCB = 5000000;
  let ngayCongQD = 24;
  let heSo;
  heSo =
    chucVu === "manager"
      ? 3
      : chucVu === "senior"
        ? 2
        : chucVu === "staff"
          ? 1.5
          : chucVu === "intern"
            ? 1
            : 0;
  ngayCongTT >= ngayCongQD
    ? console.log("Bạn đã đủ ngày công để nhận lương.")
    : console.log("Bạn chưa đủ ngày công để nhận lương.");
  const luongThucLinh = heSo * ngayCongTT * (luongCB / ngayCongQD);
  return luongThucLinh;
}
console.log(tinhLuong("manager", 25).toLocaleString("vi-VN") + " VNĐ");

// Bài 4

function chuanHoaCau(chu) {
  chu = chu.trim().replace(/\s+/g, " ");
  chu = chu.toLowerCase();
  chu = chu.replace(/(^|[.!?]\s*)(\S)/g, (match, dauCau, char) => {
    return dauCau + char.toUpperCase();
  });
  chu = chu.replace(/\s+([!,.?])/g, "$1");
  chu = chu.replace(/([.!?])(?=\S)/g, "$1 ");
  return chu;
}

console.log(
  chuanHoaCau(
    "   xin chao   cac ban.    hom nay   troi dep qua   !toi   di hoc ve ? ",
  ),
);

// Bài 5

function mayTinhBang(a, b, phepToan) {
  let kq;
  switch (phepToan) {
    case "+":
      kq = a + b;
      break;
    case "-":
      kq = a - b;
      break;
    case "*":
      kq = a * b;
      break;
    case "/":
      kq = a / b;
      break;
    default:
      kq = "Phep toan khong hop le";
      break;
  }
  return kq;
}
console.log(mayTinhBang(5, 3, "+"));
