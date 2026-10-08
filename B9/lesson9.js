console.log(document);
function changeColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  const event = window.event;
  const caller = event.target;
  event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function removeColor() {
  const event = window.event;
  const caller = event.target;
  event.target.style.backgroundColor = "";
}

function changePosition() {
  const left = Math.floor(Math.random() * 1200);
  const top = Math.floor(Math.random() * 700);
  document.getElementById("noButton").style.cssText =
    `position: absolute; left: ${left}px; top: ${top}px`;
}
