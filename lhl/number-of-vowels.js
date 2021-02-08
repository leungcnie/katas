const numberOfVowels = function(data) {
  let num = 0;
  for (let i = 0; i < data.length; i++) {
    if ((data.charAt(i) === "a") || (data.charAt(i) === "e") || (data.charAt(i) === "i") || (data.charAt(i) === "o") || (data.charAt(i) === "u")) {
      num += 1;
    }
  }
  return num;
};


// TESTS
console.log(numberOfVowels("orange")); //expected: 3
console.log(numberOfVowels("lighthouse labs")); //expected: 5
console.log(numberOfVowels("aeiou")); //expected: 5