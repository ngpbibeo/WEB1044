let currentIndex = 0;
let interval;

const arrSrc = [
  "../images/sausage.png",
  "../images/golden.png",
  "../images/soopi.webp",
];

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

function stopSlideshow() {
  clearInterval(interval);
}
function playSlideshow() {
  stopSlideshow();
  interval = setInterval(nextImage, 200);
}
