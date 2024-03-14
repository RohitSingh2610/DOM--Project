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
