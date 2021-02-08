/*
Write a function that will find all the anagrams of a word from a list. You will be given two inputs 
a word and an array with words. You should return an array of all the anagrams or an empty array if 
there are none.
*/

// My Solution
function anagrams(word, words) {
  const output = [];
  const wordArr = word.split("");

  for (const w of words) {
    let cont = true;
    const wArr = w.split("");

    for (const char of w) {
      const wordCount = wordArr.filter(c => c === char).length;
      const wCount = wArr.filter(c => c === char).length;
      if (wordCount !== wCount) {
        cont = false;
        break;
      }
    }

    if (cont) {
      output.push(w);
    } else {
      continue;
    }
  }

  return output;
}

// Top Voted Answer
// Sort the word and filter words array for words that match when each is sorted
function anagrams(word, words) {
  word = word.split('').sort().join('');
  return words.filter(v => word === v.split('').sort().join(''));
}

// TEST CODE
const result = anagrams("abba", ["aabb", "abcd", "bbaa", "dada"]);
console.log(result); //['aabb', 'bbaa']
