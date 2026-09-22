// let a = 7;
// let b = a++;
// let c = ++a;
// console.log(a, b, c);
// let sum = 0;
// for (let i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);
// const tuoi = prompt("Nhập tuổi của bạn: ");
// tuoi >= 18
//   ? tuoi >= 30
//     ? console.log("Bạn đg ở độ tuổi trung niên.")
//     : console.log("Bạn đg ở tuổi thanh niên.")
//   : console.log("Bạn chưa đủ tuổi.");
// Xử lý toán tử 3 ngôi
const string = `Xin chào Phát, ${
tuoi >= 18
  ? tuoi >= 30
    ? "Bạn đangg ở độ tuổi trung niên."
    : "Bạn đang ở tuổi thanh niên."
  : "Bạn chưa đủ tuổi."
}`;
console.log(string);

//Spread
const sinhvien1 = undefined;
console.log(Boolean(sinhvien1));
console.log(sinhvien1?.age);

const arr1 = [1,2,3]
const arr2 = [3,4,5]
const arr3 = [...arr1,...arr2]
console.log(arr3)
//Rest: Còn lại
const [a, b, ...rest] = arr1;
console.log(rest)