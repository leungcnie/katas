/*
Your task is to sort a given string. Each word in the string will contain a single number. 
This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only 
contain valid consecutive numbers.
*/

function order(words){
  const arr = words.split(" ");
  const outputArr = [];
  
  // Build an array of objects with "word" and "num" keys
  for (const word of arr) {
    const obj = {};
    obj.word = word;
    for (const letter of word) {
      if (!isNaN(Number(letter))) {
        obj.num = letter;
      }
    }
    outputArr.push(obj);
  }
  
  // Sort array
  outputArr.sort((a, b) => a.num - b.num);
  
  return outputArr.map(obj => obj.word).join(" ");
}