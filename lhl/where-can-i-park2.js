const whereCanIPark = function (spots, vehicle) {
  for (let rows = 0; rows < spots.length; rows++) {
    for (let columns = 0; columns < spots.length; columns++) {
      switch (vehicle) {
        case "regular":
          if (spots[rows][columns] === "R") {
            return [columns, rows];
          }
          break;
        case "small":
          if (spots[rows][columns] === "R" || spots[rows][columns] === "S") {
            return [columns, rows];
          }
          break;
        case "motorcycle":
          if (spots[rows][columns] === "R" || spots[rows][columns] === "S" || spots[rows][columns] === "M") {
            return [columns, rows];
          }
          break;
      }
    }
  }
  return false;
};



// TESTS
console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
    ['s', 'M', 's', 'S', 'r', 'M'], // 1
    ['s', 'M', 's', 'S', 'r', 'm'], // 2
    ['S', 'r', 's', 'm', 'r', 'M'], // 3
    ['S', 'r', 's', 'm', 'r', 'M'], // 4
    ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
))

/* EXPECTED OUTPUTS
[4, 0]
false
[3, 1]
*/