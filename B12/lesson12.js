// document.getElementById("div1").className = "background bigText";
// document.getElementById("div2").classList.add("bigText", "background");
// document.getElementById("div1").classList.remove("background");
// document.getElementById("div1").classList.toggle("background");
// document.getElementById("div1").classList.contains("background");

// NỘI DUNG BÀI THI
// setTimeout(() => {
//   document.getElementById("slider").src = "./images/sausage.png";
// }, 2000);

// Tạo một mảng lưu trữ src của tất cả ảnh
const arrSrc = [
  "../images/sausage.png",
  "../images/golden.png",
  "../images/soopi.webp",
];

let currentIndex = 0;
let interval;

document.getElementById("slider").className = "slider";

function nextImage() {
  if (currentIndex == arrSrc.length - 1) {
    currentIndex = 0;
    document.getElementById("slider").src = arrSrc[currentIndex];
  } else {
    currentIndex++;
    document.getElementById("slider").src = arrSrc[currentIndex];
  }
}

function prevImage() {
  if (currentIndex == 0) {
    currentIndex = arrSrc.length - 1;
    document.getElementById("slider").src = arrSrc[currentIndex];
  } else {
    currentIndex--;
    document.getElementById("slider").src = arrSrc[currentIndex];
  }
}

function start() {
  interval = setInterval(nextImage, 500);
}

function stop() {
  clearInterval(interval);
}
