/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive 
alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
and numeric digits.
*/

function duplicateCount(text){
  let output = 0;
  const counter = {};
  for (const letter of text.toLowerCase()) {
    if (counter[letter]) {
      counter[letter]++;
    } else {
      counter[letter] = 1;
    }
  }
  
  for (const count of Object.values(counter)) {
    if (count > 1) {
      output++;
    }
  }
  
  return output;
  
}