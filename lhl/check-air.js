const checkAir = function (samples, threshold) {
  let dirtyNum = 0;
  let total = samples.length;
  for (let i = 0; i < samples.length; i++) {
    if (samples[i] === "dirty") {
      dirtyNum++;
    }
  }
  let dirtyRatio = dirtyNum / total;
  if (dirtyRatio > threshold) {
    return "Polluted";
  } else {
    return "Clean";
  }
};




// TESTS
console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))

/* EXPECTED
Polluted
Polluted
Clean
*/