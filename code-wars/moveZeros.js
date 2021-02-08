/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the 
order of the other elements.
*/

var moveZeros = function (arr) {
  const zeros = arr.filter(val => val === 0);
  const nonZeros = arr.filter(val => val !== 0);

  return nonZeros.concat(zeros);
};
