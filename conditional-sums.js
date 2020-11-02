const conditionalSum = function(values, condition) {
  let sum = 0;
  switch (condition) {
    case "even":
      for (let i = 0; i < values.length; i++) {
        if (values[i] % 2 === 0) {
          sum += values[i];
        }
      }
      break;
    case "odd":
      for (let i = 0; i < values.length; i++) {
        if (!(values[i] % 2 === 0)) {
          sum += values[i];
        }
      }
      break;
  }
  if (sum === 0) {
    return 0;
  } else {
    return sum;
  }
};


// TESTS
console.log(conditionalSum([1, 2, 3, 4, 5], "even")); // expected: 6
console.log(conditionalSum([1, 2, 3, 4, 5], "odd")); // expected: 9
console.log(conditionalSum([13, 88, 12, 44, 99], "even")); // expected: 144
console.log(conditionalSum([], "odd")); // expected: 0