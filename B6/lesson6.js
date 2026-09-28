// const sinhVien = { name: "Minh", age: 27, }
// console.log(sinhVien.name);
// console.log(sinhVien["name"]);
// const arr = [1, 2, 3, 4, 5];
// arr.forEach((phanTuMangDang, index, mang) => {
//     console.log(phanTuMangDang, index, mang);
// })

// arr.splice(arr.length, 0, 6, 7, 8, 9);
// arr.splice(arr.length, -1, 1);
// arr.splice(0, 0, -1);
// arr.splice(0, 1)

// arr.splice(-2, 2);
// console.log(arr);

// console.log(arr[-1]);
const students = [
  {
    id: 1,
    name: "Nguyen Van An",
    age: 18,
    gender: "Nam",
    class: "SD1801",
    score: 8.5,
  },
  {
    id: 2,
    name: "Tran Thi Binh",
    age: 19,
    gender: "Nu",
    class: "SD1801",
    score: 7.8,
  },
  {
    id: 3,
    name: "Le Hoang Nam",
    age: 18,
    gender: "Nam",
    class: "SD1802",
    score: 9.2,
  },
  {
    id: 4,
    name: "Pham Minh Anh",
    age: 20,
    gender: "Nu",
    class: "SD1802",
    score: 6.9,
  },
  {
    id: 5,
    name: "Do Tuan Anh",
    age: 18,
    gender: "Nam",
    class: "SD1803",
    score: 8.8,
  },
];

// Dựa trên điểm của sinh viên , hãy thêm cặp key value title
console.log(
  students.map((student) => {
    if (student.score >= 8) {
      return { ...student, danhHieu: "Học sinh giỏi" };
    } else if (student.score >= 6) {
      return { ...student, danhHieu: "Học sinh khá" };
    } else {
      return { ...student, danhHieu: "Không xếp hạng" };
    }
  }),
);
const arr = [47, 12, 89, 3, 76, 25, 61, 94, 18, 52];
const arr1 = ["X", "V", "A", "B", "bsdv"];
const arr2 = [...arr, ...arr1];
console.log(arr.sort((a, b) => {}));
