const whereCanIPark = function (spots, vehicle) {
  let parkingSpot = [];
  switch (vehicle) {
    case "regular":
      for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots.length; j++) {
          if (spots[i][j] === "R") {
            parkingSpot.push(j, i);
            return parkingSpot;
          }
        }
      }
      break;
    case "small":
      for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots.length; j++) {
          if (spots[i][j] === "R" || spots[i][j] === "S") {
            parkingSpot.push(j, i);
            return parkingSpot;
          }
        }
      }
      break;
    case "motorcycle":
      for (let i = 0; i < spots.length; i++) {
        for (let j = 0; j < spots.length; j++) {
          if (spots[i][j] === "R" || spots[i][j] === "S" || spots[i][j] === "M") {
            parkingSpot.push(j, i);
            return parkingSpot;
          }
        }
      }
      break;
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