const assert = require('assert').strict;

// My Solution
function duplicateEncode(word){
  word = word.toLowerCase();
  const counter = {};
  let output = ""

  // Build an object to keep count of letter appearances
  for (const letter of word) {
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  
  // Build output string according to letter counts
  for (const letter of word) {
    if (counter[letter] > 1) {
      output += ")";
    } else if (counter[letter] === 1) {
      output += "(";
    }
  }

  return output;
}

// Top Voted Solution
function duplicateEncode(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}

// TEST CODE
console.log(assert.deepEqual(duplicateEncode("din"),"((("));
console.log(assert.deepEqual(duplicateEncode("recede"),"()()()"));
console.log(assert.deepEqual(duplicateEncode("Success"),")())())"));
console.log(assert.deepEqual(duplicateEncode("(( @"),"))(("));