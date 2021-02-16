function parseInt(string) {
  let output = 0;
  let currentNum = 0; // Keep track to multiply by multipliers
  // Create array of number words
  const arr = string.replace(/-/g, " ").split(" ").filter(word => word !== "and");

  const nums = {
    zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10, 
    eleven: 11, twelve: 12, thirteen: 13, fourteen: 14, fifteen: 15, sixteen: 16, seventeen: 17, 
    eighteen: 18, nineteen: 19, twenty: 20, thirty: 30, forty: 40, fifty: 50, sixty: 60, seventy: 70,
    eighty: 80, ninety: 90
  }

  const multipliers = {
    hundred: 100, thousand: 1000, million: 1000000
  }

  for (const num of arr) {
    if (multipliers[num]) {
      currentNum *= multipliers[num];
      if (num === "thousand" || num === "million") {
        output += currentNum;
        currentNum = 0;
      }
    } else {
      currentNum += nums[num];
    }
    // console.log("num", num, "curentNum", currentNum, "output", output);
  }

  output += currentNum;

  return output;
}

// TEST CODE
console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen"));
console.log(parseInt("eighty-five thousand two hundred fifty-four")) // 85254