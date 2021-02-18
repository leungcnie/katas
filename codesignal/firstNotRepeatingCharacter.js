// Return first not-repeated character or "_" if none

function firstNotRepeatingCharacter(s) {
  const hash = {};
  
  for (const char of s) {
      if (hash[char]) {
          hash[char]++;
      } else {
          hash[char] = 1;
      }
  }
  
  for (const char of s) {
      if (hash[char] === 1) {
          return char;
      }
  }
  
  return "_";
}