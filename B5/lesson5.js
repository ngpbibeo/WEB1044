const checkNumber = isNaN(prompt("Please enter a number:"));
checkNumber === false
  ? console.log("You entered a number.")
  : console.log("You did not enter a number.");

const numbers = [5, 3, 8, 1, 4];
const indexOfLowest = numbers.indexOf(Math.min(...numbers));
numbers.splice(indexOfLowest, 1);
console.log(numbers);

const datCuoc = prompt("Xin hãy nhập cửa đặt cược (tài/xỉu)");

const xucXac1 = Math.floor(Math.random() * 6) + 1;
const xucXac2 = Math.floor(Math.random() * 6) + 1;
const xucXac3 = Math.floor(Math.random() * 6) + 1;

const tong = xucXac1 + xucXac2 + xucXac3;

console.log(`Xúc xắc: ${xucXac1} ${xucXac2} ${xucXac3}`);
console.log(`Tổng điểm: ${tong}`);

if (tong < 11) {
  // Xỉu
  if (datCuoc.toLowerCase() === "xỉu") {
    console.log("Bạn thắng!");
  } else {
    console.log("Bạn thua!");
  }
} else {
  // Tài
  if (datCuoc.toLowerCase() === "tài") {
    console.log("Bạn thắng!");
  } else {
    console.log("Bạn thua!");
  }
}
