// Bài 1

const chanLe = prompt("Nhập số cần kiểm tra: ");
if (chanLe % 2 == 0)    {
    console.log("Số bạn nhập là số chẵn.");
} else {
    console.log("Số bạn nhập là số lẻ.");
}

// Bài 2.1

const tinhDien = Number(prompt("Nhập số điện tiêu thụ: "));
tinhDien >=0 && tinhDien <= 50 
? console.log("Số tiền điện phải trả là: " + tinhDien * 1.800 + " VNĐ")
: tinhDien >=51 && tinhDien <=100
? console.log("Số tiền điện phải trả là: " + tinhDien * 2.300 + " VNĐ")
: tinhDien >=101 
? console.log("Số tiền điện phải trả là: " + tinhDien * 3.000 + " VNĐ")
: console.log("Số liệu nhập vào không hợp lệ.");  

// Bài 2.2

const tienDien = Number(prompt("Nhập số tiền điện phải trả: ") );
let soDien;
 soDien = tienDien <= 90000
 ? tienDien / 1800
 : tienDien <= 205000
 ? 50 + (tienDien - 90000) / 2300
 : 100 + (tienDien - 205000) / 3000;
console.log("Số điện tiêu thụ là: " + soDien + " kWh.");

// Bài 3

const chucVu = prompt("Nhập chức vụ của bạn: (Manager/Senior/Staff/Intern)").toLowerCase();
let heSo;
heSo = chucVu === "manager"
? 3
: chucVu === "senior"
? 2
: chucVu === "staff"
? 1.5
: chucVu === "intern"
? 1
: 0;

const ngayCongTT = Number(prompt("Nhập số ngày công: "));
let ngayCongQD = 24;
let luongCB = 5000000;
ngayCongTT >= ngayCongQD
? console.log("Bạn đã đủ ngày công để nhận lương.")
: console.log("Bạn chưa đủ ngày công để nhận lương.");

const luongThucLinh = heSo * ngayCongTT * (luongCB / ngayCongQD);
console.log("Lương thực lĩnh: " + luongThucLinh.toLocaleString("vi-VN") + " VNĐ");
