// Given a roman numeral, convert it to an integer.

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const roman = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  let output = 0;
  
  for (i = 0; i < s.length; i++) {
      if (roman[s[i]] < roman[s[i + 1]]) {
          output += roman[s[i+1]] - roman[s[i]];
          i++;
      } else {
          output += roman[s[i]];
      }
  }
  
  return output;
};