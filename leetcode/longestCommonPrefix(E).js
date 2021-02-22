/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const output = "";
  
  if (strs.length === 0) {
      return "";
  }
  
  let prefix = strs[0].split("");
  
  for (let i = 1; i < strs.length; i++) {
      const strArr = strs[i].split("");
      // compare each char at each index
      for (let j = 0; j < prefix.length; j++) {
          if (prefix[j] !== strArr[j]) {
              if (j === 0) {
                  return "";
              } else {
                  prefix = prefix.slice(0, j);
              }
          }
      }
  }
  
  return prefix.join("");
};