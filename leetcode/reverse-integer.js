/*
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value 
to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

EXAMPLE:
Input: x = -123
Output: -321
*/

// My solution
const reverse = function(x) {
  const numStr = x.toString().split("").reverse().join("").replace("-", "");
  const output = Number(numStr) * Math.sign(x);
  return output >= -2147483648 && output <= 2147483647 ? output : 0;
};