/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/

// My Solution
function pigIt(str) {
  const puncs = [".", ",", ":", "!", "?"];
  return str
    .split(" ")
    .map(word =>
      puncs.includes(word) ? word : word.slice(1) + word.charAt(0) + "ay"
    )
    .join(" ");
}
