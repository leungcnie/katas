/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would 
like your help with an application form that will tell prospective members which category they 
will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In 
this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
*/

// My Solution
function openOrSenior(data){
  const output = [];
  
  for (const set of data) {
    if (set[0] > 54 && set[1] > 7) {
      output.push("Senior");
    } else {
      output.push("Open");
    }
  }
  
  return output;
}

// Top Voted Solution
// Destructuring: [age, handicap] https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// Arrow Functions: () => {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

function openOrSenior(data){
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? 'Senior' : 'Open');
}