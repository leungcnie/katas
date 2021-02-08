let prompt = require("prompt-sync")();
// number between 1 to 10
let num = Math.floor(Math.random() * 10);
let guesses = [];
let input = Number(prompt("Guess a number: "));

while (input !== num) {
  if (isNaN(input)) {
    console.log("Not a number! Try again!");
  } else if (guesses.includes(input)) {
    console.log("Already Guessed!");
  } else if (input > num) {
    guesses.push(input);
    console.log("Too High!");
  } else if (input < num) {
    guesses.push(input);
    console.log("Too Low!");
  }
  input = Number(prompt("Guess a number: "));
}
if (input === num) {
  let attempts = guesses.length + 1;
  if (attempts === 1) {
    console.log("You got it! You took 1 attempt!");
  } else {
    console.log("You got it! You took " + attempts + " attempts!");
  }
}

