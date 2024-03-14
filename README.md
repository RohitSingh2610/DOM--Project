## Project One Color Change
# Using HTML , CSS , Js

# Solution Code 1
```javascript
console.log("hello");
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "black") {
      body.style.backgroundColor = #B6EFD4;
    }
  });
});

```


# Project Second 
## IBM(Body mass index ) Calculator

## Solution This Program

# code 
 ``` javascript
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

```


# Project Third
## Real Time and Date Change

# Code 3 Solution

## Code In Js
``` javascript
const clockTime1 = document.querySelector("#clock1");
const clockTime = document.querySelector("#clock");

setInterval(function () {
  let date = new Date();
  clockTime1.innerHTML = `Date : ${date.toLocaleDateString()}`;
  clockTime.innerHTML = date.toLocaleTimeString();
}, 1000);

```
# Project 4
## Guessing a Random Number 

# Code 4 Solution Code

```javascript
let randomeNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomeNumber);

const userInput = document.querySelector("#guessField");
const sumbitBtn = document.querySelector("#subt");
const startOver = document.querySelector(".resultParas");
const guessSolt = document.querySelector(".gusses");
const remainingValue = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const p = document.createElement("p");
let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  sumbitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    // console.log(guess);
    validteGuess(guess);
  });
}

function validteGuess(guess) {
  //
  if (isNaN(guess)) {
    alert("Please Enter a valid number");
  } else if (guess < 1) {
    alert("Please Enter a  number greather than 1");
  } else if (guess > 100) {
    alert("Please Enter a  number less than 100");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMassage(`Game Over. Random number was ${randomeNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  //
  if (guess === randomeNumber) {
    displayMassage(`You guessed is Right`);
    endGame();
  } else if (guess < randomeNumber) {
    displayMassage(`Number is Tooo Low`);
  } else if (guess > randomeNumber) {
    displayMassage(`Number is Tooo High`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSolt.innerHTML += `${guess}  `;
  numGuess++;
  remainingValue.innerHTML = `${11 - numGuess}`;
}
function displayMassage(massage) {
  lowOrHi.innerHTML = `<h2>${massage}</h2>`;
}
function endGame() {
  //
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  //
  const newGameButton = document.querySelector("#newGame");
  newGameButton.style.width = "24rem";
  newGameButton.style.height = "3rem";
 

  newGameButton.addEventListener("click", function (e) {
    randomeNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSolt.innerHTML = "";
    remainingValue.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}

```
