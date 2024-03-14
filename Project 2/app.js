const form = document.querySelector("form");
const underWeight = document.querySelector(".underWeight");
const normalRange = document.querySelector(".normalRange");
const overWeight = document.querySelector(".overWeight");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // Resetting color properties
  underWeight.style.color = ""; // Reset color to default
  normalRange.style.color = ""; // Reset color to default
  overWeight.style.color = ""; // Reset color to default


  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");
  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a vaild height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a vaild weight ${weight}`;
  } else {
    const bmiResult = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result in the display
    //  const resultComp = result.innerHTML = `<span>${bmiResult}</span>`;
    const resultComp = bmiResult;
    if (resultComp <= 18.6) {
      result.innerHTML = `<span> Under Weight ${bmiResult}</span>`;
      underWeight.style.color = "green";
    } else if (resultComp <= 24.9) {
      result.innerHTML = `<span> Normal Weight ${bmiResult}</span>`;
      normalRange.style.color = "Orange";
    } else {
      result.innerHTML = `<span> Over Weight ${bmiResult}</span>`;
      overWeight.style.color = "red";
    }
  }
});
