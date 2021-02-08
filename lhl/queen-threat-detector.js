const generateBoard = function (queen1, queen2) {
  let board = [];
  for (let i = 0; i < 8; i ++) {
    let row = [];
    for (let j = 0; j < 8; j++) {
      if (i === queen1[0] && j === queen1[1] || i === queen2[0] && j === queen2[1]) {
        row.push(1);
      } else {
        row.push(0);
      }
    }
    board.push(row);
  }
  return board;
}

const queenThreat = function (board) {
  let queens = [];
  // get coordinates of both queens
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        queens.push([i, j]);
      }
    }
  }
  let firstQueen = queens[0];
  let secondQueen = queens[1];
  // [REFACTOR] use slope to calculate diagonals (x1 - x2) / (y1 - y2) = 1 or -1
  return firstQueen[0] === secondQueen[0] || firstQueen[1] === secondQueen[1] || firstQueen[0] - secondQueen[0] / firstQueen[1] - secondQueen[1] === 1 || firstQueen[0] - secondQueen[0] / firstQueen[1] - secondQueen[1] === -1;
}

/*
// check if the second queen in diagonal to the first
const overlapDiagonals = function (queen1, queen2) {
  let r = queen1[0];
  let c = queen1[1];
  let position = [r, c];
  // top right
  while (position[0] !== 0 && position[1] !== 7) {
    position[0]++;
    position[1]++;
    if (queen2[0] === position[0] && queen2[1] === position[1]) {
      return true;
    }
  }
  position = [r, c];
  // top left
  while (position[0] !== 0 && position[1] !== 0) {
    position[0]++;
    position[1]++;
    if (queen2[0] === position[0] && queen2[1] === position[1]) {
      return true;
    }
  }
  position = [r, c];
  // bottom right
  while (position[0] !== 7 && position[1] !== 7) {
    position[0]++;
    position[1]++;
    if (queen2[0] === position[0] && queen2[1] === position[1]) {
      return true;
    }
  }
  position = [r, c];
  // bottom left
  while (position[0] !== 7 && position[1] !== 0) {
    position[0]++;
    position[1]--;
    if (queen2[0] === position[0] && queen2[1] === position[1]) {
      return true;
    }
  }
  return false;
} 

// EXAMPLES [2,5]
// TR: [1,6] [0,7] - r - 1, c + 1 (c=7)
// TL: [1,4] [0,3] - r - 1, c - 1 (r=0)
// BR: [3,6] [4,7] - r + 1, c + 1 (c=7)
// BL: [3,4] [4,3] [5,2] [6,1] [7,0] - r + 1, c - 1
*/

let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));

let wQueen = [0, 0];
let bQueen = [5, 7];
let gBoard = generateBoard(wQueen, bQueen);
console.log(gBoard);
console.log(queenThreat(gBoard));
