// if (window.confirm("Bạn có chắc chắn muốn xoá sản phẩm này ko?")) {
//     alert("Bạn đã xoá sản phẩm");
// } else {
//     alert("Bạn đã cancel");
// }
// document.getElementById("back").addEventListener("click", () => {
//     history.back();
// });

// const newWindow = window.open();
// newWindow.location.href = "https://www.google.com";

// newWindow.screen.height = "400px";
// newWindow.screen.width = "600px";

// let i = 3;
// function demThoiGian() {
//   setTimeout(() => {
//     alert(`Đã qua ${i} giây kể từ lúc trình duyệt được load`);
//     i = i + 3;
//   }, 3000);
// }
// setInterval(demThoiGian, 3000);
let second = 0;
let minute = 0;
let hour = 0;
let interval;

const startTimer = () => {
  if (!interval) {
    interval = setInterval(() => {
      if (second == 60) {
        second = 0;
        minute++;
      }

      if (minute == 60) {
        minute = 0;
        hour++;
      }

      if (hour == 24) {
        hour = 0;
      }

      if (hour <= 9) {
        document.getElementById("timerHour").innerHTML = "0" + hour;
      } else {
        document.getElementById("timerHour").innerHTML = hour;
      }

      if (minute <= 9) {
        document.getElementById("timerMinute").innerHTML = "0" + minute;
      } else {
        document.getElementById("timerMinute").innerHTML = minute;
      }

      if (second <= 9) {
        document.getElementById("timerSecond").innerHTML = "0" + second;
      } else {
        document.getElementById("timerSecond").innerHTML = second;
      }

      second++;
    }, 1);
  }
};

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", () => {
  clearInterval(interval);
});
document.getElementById("reset").addEventListener("click", () => {
  clearInterval(interval);
  second = 0;
  minute = 0;
  hour = 0;
  document.getElementById("timerSecond").innerHTML = "0" + second;
  document.getElementById("timerMinute").innerHTML = "0" + minute;
  document.getElementById("timerHour").innerHTML = "0" + hour;
});
