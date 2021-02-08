const repeatNumbers = function (data) {
  let str = "";
  for (let i = 0; i < data.length; i++) {
    if (data.length > 1 && i !== (data.length - 1)) {
      for (let p = 0; p < data[i][1]; p++) {
        str += String(data[i][0])
      }
      str += ", "
    } else {
      for (let p = 0; p < data[i][1]; p++) {
        str += String(data[i][0]);
      }
    }
  }
  return str;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
