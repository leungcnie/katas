/*
Check to see if a string has the same amount of 'x's and 'o's. The method must return a 
boolean and be case insensitive. The string can contain any char.
*/

// My solution
function XO(str) {
  const counter = {};
  for (const char of str.toLowerCase()) {
    if (counter[char]) {
      counter[char]++;
    } else {
      counter[char] = 1;
    }
  }
  
  return counter["o"] === counter["x"];
}

// Top voted solution
// using match, create arrays of all Xs and Os and use .length
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

// using filter
const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}