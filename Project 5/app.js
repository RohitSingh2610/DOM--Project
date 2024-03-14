const randomChangeColor = function () {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let setIntervalId;
const startChangingColor = function () {
  if (!setIntervalId) {
    setIntervalId = setInterval(changeBgColor, 1000);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomChangeColor();
  }
};
const stopChangingColor = function () {
  clearInterval(setIntervalId);
  setIntervalId = null;
};
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);
