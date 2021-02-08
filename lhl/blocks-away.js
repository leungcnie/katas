const blocksAway = function(directions) {
  let turns = directions.filter(e => typeof(e) === "string");
  let distance = directions.filter(e => typeof(e) === "number");
  let dir = "N";
  let position = [0, 0];
  let output = {};
  // first turn
  switch (turns[0]) {
    case "right":
      position[0] = distance[0];
      dir = "E";
      break;
    case "left":
      position[1] = distance[0];
      break;
  }
  // all other turns
  for (let i = 1; i < turns.length; i++) {
    switch (dir) {
      case "N":
        if (turns[i] === "right") {
          position[0] += distance[i];
          dir = "E";
        } else if (turns[i] === "left") {
          position[0] -= distance[i];
          dir = "W";
        }
        break;
      case "E":
        if (turns[i] === "right") {
          position[1] -= distance[i];
          dir = "S";
        } else if (turns[i] === "left") {
          position[1] += distance[i];
          dir = "N";
        }
        break;
      case "S":
        if (turns[i] === "right") {
          position[0] -= distance[i];
          dir = "W";
        } else if (turns[i] === "left") {
          position[0] += distance[i];
          dir = "E";
        }
        break;
      case "W":
        if (turns[i] === "right") {
          position[1] += distance[i];
          dir = "N";
        } else if (turns[i] === "left") {
          position[1] -= distance[i];
          dir = "S";
        }
        break;
    }
  }
// build and return output
output.east = position[0];
output.north = position[1];
return output;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
