const squareCode = function (message) {
  let msg = message.replace(/\s/g, "");
  let num = Math.ceil(Math.sqrt(msg.length));
  let rows = [];
  let columns = [];
  // make rows
  /*
  for (let i = 0; i < msg.length; i++) {
    if ((i + 1) % num === 0) {
      rows.push(msg.slice(start, i + 1));
      start = i + 1;
    } else if (i === msg.length - 1) {
      rows.push(msg.slice(start, msg.length));
    }
  }
  [REFACTOR]: used substr() to break into chunks
*/
  for (let i = 0; i < msg.length; i += num) {
    rows.push(msg.substr(i, num));
  }

  // start coded array with 1 letter elements
  for (let i = 0; i < rows[0].length; i++) {
    columns.push(rows[0].charAt(i));
  }
  // add rest of rows
  for (let i = 1; i < rows.length; i++) {
    for (let j = 0; j < num; j++) {
      columns[j] += rows[i].charAt(j);
    }
  }
  /*
  // build final string from array of coded words
  for (let i = 0; i < coded.length; i++) {
    output += coded[i] + " ";
  }
  [REFACTOR]: used array.join() to join array with spaces and return as string
  */
  return columns.join(" ");
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
