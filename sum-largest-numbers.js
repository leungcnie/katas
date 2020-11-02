/*
const sumLargestNumbers = function(data) {
  let first = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > first) {
      first = data[i];
    }
  }
  let firstIndex = data.indexOf(first);
  data.splice(firstIndex, 1);
  let second = data[0];
  for (let i = 0; i < data.length; i++) {
    if (data[i] > second) {
      second = data[i];
    }
  }
  return first + second;
};
*/

const sumLargestNumbers = function (data) {
  let biggest = data[0];
  let secondBiggest;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > biggest) {
      secondBiggest = biggest;
      biggest = data[i];
    }
  }
  return biggest + secondBiggest;
}


// TESTS
console.log(sumLargestNumbers([1, 10])); //expected: 11
console.log(sumLargestNumbers([1, 2, 3])); //xpected: 5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //expected: 126