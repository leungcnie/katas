// Problem: return bool if grid is a valid sudoku
// Strategy: Create 2 dictionaries of sets to track columns and subgrids, and 1 set to track rows
// use nested for loop to check each element

function sudoku2(grid) {
  const dict = {};
  const subgrids = {
    1: new Set(),
    2: new Set(),
    3: new Set(),
    4: new Set(),
    5: new Set(),
    6: new Set(),
    7: new Set(),
    8: new Set(),
    9: new Set(),
  };
  let hSet = new Set();

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid.length; c++) {
      const num = Number(grid[r][c]);
      if (!isNaN(num)) {
        // If num is in hSet return false, otherwise add to set
        if (hSet.has(num)) {
          console.log("horizontal");
          return false;
        } else {
          hSet.add(num);
        }

        // Build sets for columns
        if (dict[c]) {
          if (dict[c].has(num)) {
            console.log("vertical");
            return false;
          } else {
            dict[c].add(num);
          }
        } else {
          dict[c] = new Set();
          dict[c].add(num);
        }

        // Build sets for all 9 subgrids
        let sgNum = 0;
        if (r <= 2 && c <= 2) {
          sgNum = 1;
        } else if (r >= 3 && r <= 5 && c <= 2) {
          sgNum = 2;
        } else if (r >= 6 && r <= 8 && c <= 2) {
          sgNum = 3;
        } else if (r <= 2 && c >= 3 && c <= 5) {
          sgNum = 4;
        } else if (r >= 3 && r <= 5 && c >= 3 && c <= 5) {
          sgNum = 5;
        } else if (r >= 6 && r <= 8 && c >= 3 && c <= 5) {
          sgNum = 6;
        } else if (r <= 2 && c >= 6 && c <= 8) {
          sgNum = 7;
        } else if (r >= 3 && r <= 5 && c >= 6 && c <= 8) {
          sgNum = 8;
        } else if (r >= 6 && r <= 8 && c >= 6 && c <= 8) {
          sgNum = 9;
        }

        if (subgrids[sgNum].has(num)) {
          return false;
        } else {
          subgrids[sgNum].add(num);
        }
      }
    }

    hSet.clear();
  }

  return true;
}
