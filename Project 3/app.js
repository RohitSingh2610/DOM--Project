const clockTime1 = document.querySelector("#clock1");
const clockTime = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clockTime1.innerHTML = `Date : ${date.toLocaleDateString()}`;
  clockTime.innerHTML = date.toLocaleTimeString();
}, 1000);
