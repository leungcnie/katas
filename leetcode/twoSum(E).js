/*
Given an array of integers nums and an integer target, return indices of the two numbers such that 
they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same 
element twice.

You can return the answer in any order.
*/

// My solution
var twoSum = function (nums, target) {
  const output = [];
  for (i = 0; i < nums.length; i++) {
    for (j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        output.push(i, j);
      }
    }
  }
  return output;
};

// Other solutions
const twoSum = function (nums, target) {
  // build a table of complements + their index
  const comp = {};
  for (let i = 0; i < nums.length; i++) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }
    comp[target - nums[i]] = i;
  }
};
