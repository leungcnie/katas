function rotateImage(a) {
  const output = [];
  
  for (let i = 0; i < a.length; i++) {
      for (let j = 0; j < a.length; j++) {
          if (output[j]) {
            // if array already exists, push number
              output[j].push(a[i][j]);
          } else {
            // first loop, initialize output arrays with a single element
              output[j] = [a[i][j]];
          }
      }
  }
  
  return output.map(arr => arr.reverse())
}