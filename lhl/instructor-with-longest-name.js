const instructorWithLongestName = function(instructors) {
  let longestLength = 0;
  let indexOfLongest = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > longestLength) {
      longestLength = instructors[i].name.length;
      indexOfLongest = i;
    }
  }
  return instructors[indexOfLongest];
};


// TESTS
console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
//expected: {name: "Jeremiah", course: "Web"}
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
//expected: {name: "Domascus", course: "Web"}