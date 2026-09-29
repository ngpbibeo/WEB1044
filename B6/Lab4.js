// Bài 1
let shoppingList = ["Trứng, Thịt, Rau"];
console.log(shoppingList);
shoppingList.push("Sữa");
shoppingList.unshift("Bánh mì");
let removedItem = shoppingList.pop();
console.log("Mặt hàng đã bị xóa:", removedItem);
console.log("Mặt hàng thứ hai: ", shoppingList[1]);

// Bài 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let evenNumbers = numbers.filter(function (number) {
  return number % 2 === 0;
});

console.log(evenNumbers);

let doubledEvenNumbers = [];
for (let i = 0; i < evenNumbers.length; i++) {
  doubledEvenNumbers.push(evenNumbers[i] * 2);
}

console.log(doubledEvenNumbers);

// Bài 3
const students = [
  { name: "An", score: 8.2 },
  { name: "Bình", score: 7.5 },
  { name: "Chi", score: 9.1 },
  { name: "Duy", score: 6.8 },
  { name: "Hà", score: 8.7 },
  { name: "Khánh", score: 5.9 },
  { name: "Lan", score: 7.8 },
  { name: "Minh", score: 9.4 },
  { name: "Ngọc", score: 6.5 },
  { name: "Quân", score: 8.0 },
];

// Bài 3.1
let hocSinhTren8 = students.filter(function (student) {
  return student.score > 8.0;
});

console.log("a. Học sinh có điểm trên 8.0: ", hocSinhTren8);

// Bài 3.2
let hocSinhCaoNhat = students.reduce(function (max, student) {
  return student.score > max ? student.score : max;
}, 0);

// Bài 3.3
let diemHocSinh = students.reduce(function (sum, student) {
  return sum + student.score;
});

let diemTB = diemHocSinh / students.length;
console.log("c. Điểm trung bình của lớp: ", diemTB);

// Bài 3.4
let tenHocSinh = students.map(function (student) {
  return student.name;
});
console.log("d. Danh sách học sinh: ", tenHocSinh);

// Bài 3.5
let sapXep = [...students].sort(function (a, b) {
  return b.score - a.score;
});
console.log("e. Danh sách điểm giảm dần: ", sapXep);

// Bài 4
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 30 },
  { name: "Keyboard", price: 75 },
  { name: "Monitor", price: 300 },
];

// Bài 4.1
let sapXepGia = [...products].sort(function (a, b) {
  return a.price - b.price;
});

// Bài 4.2
console.log("a. Danh sách sản phẩm theo giá tăng dần: ", sapXepGia);

// Bài 5
// Đề tài: Quản lý danh sách sản phẩm
// Vấn đề:
// Một cửa hàng có danh sách sản phẩm gồm tên, giá và số lượng. Cần:
// Hiển thị các sản phẩm có giá dưới 100.000đ.
// Tính tổng giá trị hàng tồn kho.
// Tạo một mảng mới chỉ chứa tên sản phẩm.
// Tìm sản phẩm có giá cao nhất.
// Sắp xếp sản phẩm theo giá giảm dần.

const productsBai5 = [
  { name: "Bút bi", price: 5000, quantity: 20 },
  { name: "Vở", price: 15000, quantity: 30 },
  { name: "Balo", price: 150000, quantity: 5 },
  { name: "Thước", price: 10000, quantity: 15 },
  { name: "Hộp bút", price: 80000, quantity: 10 },
];

// 1. Lọc các sản phẩm có giá dưới 100.000đ
let cheapProducts = products.filter(function (product) {
  return product.price < 100000;
});

console.log("1. Sản phẩm dưới 100.000đ:");
console.log(cheapProducts);

// 2. Tính tổng giá trị hàng tồn kho
let totalValue = products.reduce(function (total, product) {
  return total + product.price * product.quantity;
}, 0);

console.log("2. Tổng giá trị hàng tồn kho:", totalValue, "đ");

// 3. Tạo mảng mới chỉ chứa tên sản phẩm
let productNames = products.map(function (product) {
  return product.name;
});

console.log("3. Tên các sản phẩm:");
console.log(productNames);

// 4. Tìm sản phẩm có giá cao nhất
let mostExpensive = products.reduce(function (max, product) {
  return product.price > max.price ? product : max;
});

console.log("4. Sản phẩm có giá cao nhất:");
console.log(mostExpensive);

// 5. Sắp xếp sản phẩm theo giá giảm dần
let sortedProducts = [...products].sort(function (a, b) {
  return b.price - a.price;
});

console.log("5. Sản phẩm theo giá giảm dần:");
console.log(sortedProducts);
