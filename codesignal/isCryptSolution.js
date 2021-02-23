function isCryptSolution(crypt, solution) {
  // Build hash lookup for solution
  const hash = {};
  solution.forEach(pair => hash[pair[0]] = pair[1]);
  const decrypt = [];
  
  for (const word of crypt) {
      let numStr = ""
      for (const char of word) {
          numStr += hash[char];
      }
      // If leading zeroes, return false
      if (numStr.length > 1 && numStr.charAt(0) === '0') {
          return false;
      }
      decrypt.push(numStr);
  }
  
  return Number(decrypt[0]) + Number(decrypt[1]) === Number(decrypt[2]);
}