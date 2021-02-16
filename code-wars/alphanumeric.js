/*
In this example you have to validate if a user input string is alphanumeric. The given string is not 
nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore
*/

function alphanumeric(string){
  if (string === "") {
    return false;
  }
  const validchars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
  for (const char of string.toLowerCase().split("")) {
    if (!validchars.includes(char)) {
      return false;
    }
  }
  return true;
}

// Top voted answer
// ^ => beginning of line
// + => repetition
// $ => end of line
// i => case-insensitive
// .test() => js function that returns boolean is theres a match to the regex
let alphanumeric = s => /^[a-z\d]+$/i.test(s);