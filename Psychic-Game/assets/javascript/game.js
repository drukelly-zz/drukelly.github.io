// Objects
let cpu = {
  "score" : 0
}
let user = {
  "chances" : 3,
  "score" : 0
}
const totalPoints = 5;
// Arrays
const guesses = [];
const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const winningLetters = [];

// Selectors
const remainingGuesses = document.getElementsByClassName("guesses")[0];
const userScore = document.getElementsByClassName("user")[0];
const cpuScore = document.getElementsByClassName("cpu")[0];
const lettersGuessed = document.getElementsByClassName("user-guesses")[0];
const modal = document.getElementsByClassName("modal")[0];
const overlay = document.getElementsByClassName("overlay")[0];
const spanNumOfAttempts = document.getElementsByClassName("num-of-attempts")[0];
const spanTotalPoints = document.getElementsByClassName("total-points")[0];

// Functions
const displayModal = (message) => {
  modal.classList.remove("hide");
  overlay.classList.remove("hide");
  modal.innerHTML = `<h1 class="uppercase">${message}</h1>`;
}
const isLetter = (letter, array) => {
  if (array.indexOf(letter[0]) !== -1) {
    return true;
  } else {
    // alert(`You typed in ${event.key}. Please type in a valid letter.`);
    console.log(`You typed in ${event.key}. Please type in a valid letter.`);
  }
}
const emptyGuesses = (selector) => {
  let emptyTimer = setTimeout(() => {
    selector.innerHTML = "";
  }, 650);
}
const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
}
const modalBegone = () => {
  modal.classList.add("hide");
  overlay.classList.add("hide");
}
const nextRound = (player) => {
  user["chances"] = 3;
  console.log(`${player} won that round!`);
  let nextRoundTimer = setTimeout(function() {
    guesses.length = 0;
  }, 500);
}
const noRepeatedEntries = (letter, array, charToGuess) => {
  if (array.indexOf(letter[0]) !== -1) {
    console.log("repeated entry");
  } else {
    guesses.push(letter);
    lettersGuessed.innerHTML += `<span class="letter">${guesses[guesses.length-1]}</span>`;
    return charToGuess;
  }
}
const resetGame = () => {
  cpu["score"] = 0;
  user["score"] = 0;
  updateScores();
}
const updateScores = () => {
  remainingGuesses.innerText = user["chances"];
  userScore.innerText = user["score"];
  cpuScore.innerText = cpu["score"];
}

// Events
// onload
document.addEventListener("DOMContentLoaded", () => {
  spanNumOfAttempts.textContent = user["chances"];
  spanTotalPoints.textContent = totalPoints;
  // randomize a letter
  let charToGuess = letters[getRandomInt(letters.length)];
  winningLetters.push(charToGuess);
  console.log(`the winning key is => ${charToGuess}`);
  updateScores();
  // onkeypress
  document.onkeypress = (event) => {
    modalBegone();
    let guess = event.key;
    if (isLetter(guess, letters) && noRepeatedEntries(guess, guesses, charToGuess)) {
      --user["chances"];
      // user guessed it!
      if (guess === charToGuess) {
        lettersGuessed.lastChild.classList.add("letter-check");
        ++user["score"];
        nextRound("user");
        emptyGuesses(lettersGuessed);
        // next letter
        charToGuess = letters[getRandomInt(letters.length)];
        winningLetters.push(charToGuess);
        console.log(`the next winning key is => ${winningLetters[winningLetters.length-1]}`);
      }
      // user ran out of chances
      if (user["chances"] === 0) {
        ++cpu["score"];
        nextRound("cpu");
        emptyGuesses(lettersGuessed);
        // next letter
        charToGuess = letters[getRandomInt(letters.length)];
        winningLetters.push(charToGuess);
        console.log(`the next winning key is => ${winningLetters[winningLetters.length-1]}`);
      }
      // user wins scenario
      if (user["score"] === totalPoints) {
        displayModal("You Win!");
        modal.classList.add("winner");
        modal.classList.remove("loser");
        setTimeout(() => {
          resetGame();
        }, 500);
        clearTimeout(this.emptyTimer);
        clearTimeout(this.nextRoundTimer);
      }
      // cpu wins scenario
      if (cpu["score"] === totalPoints) {
        displayModal("You Lose");
        modal.classList.add("loser");
        modal.classList.remove("winner");
        setTimeout(() => {
          resetGame();
        }, 500);
        clearTimeout(this.emptyTimer);
        clearTimeout(this.nextRoundTimer);
      }
      updateScores();
    }
  }
});