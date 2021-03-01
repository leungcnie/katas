// 72 ms, 39 MB
// My solution

var isValid = function(s) {
  const leftArr = [];
  const complements = {
      "}": "{",
      ")": "(",
      "]": "[",
  }
  
  for (const char of s) {
      if (char === "[" || char === "{" || char === "(") {
          leftArr.push(char);
      } else {
          if (leftArr.pop() !== complements[char]) {
              return false
          }
      }
  }
  
  return leftArr.length === 0? true : false;
};

// 72 ms, 39.2MB
var isValid = function(s) {
  if (s === null || s.length <= 0) return true;
  var cArr = s.split('');
  var stack = [];
  for (var c of cArr) {
      if (c === '[') stack.push(']');
      else if (c === '{') stack.push('}');
      else if (c === '(') stack.push(')');
      else if (stack.length === 0 || c !== stack.pop()) return false;
  }
  if (stack.length === 0) return true;
  return false;
};