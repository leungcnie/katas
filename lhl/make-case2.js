const makeCase = function (input, casing) {
  let output = [];
  let sortedCases = [];
  let first = [];
  let second = [];
  let third = [];
  if (Array.isArray(casing)) {
    for (let i = 0; i < casing.length; i++) {
      // sort array of cases
      if (firstGroup.includes(casing[i])) {
        first.push(casing[i]);
      } else if (secondGroup.includes(casing[i])) {
        second.push(casing[i]);
      } else if (thirdGroup.includes(casing[i])) {
        third.push(casing[i]);
      }
    }
    sortedCases = sortedCases.concat(first, second, third);
    // apply cases in order of priority
    for (let i = 0; i < sortedCases.length; i++) {
      output = caseStylings[sortedCases[i]](input);
      input = output;
    }
  } else {
    output = caseStylings[casing](input);
  }
  return output;
}

// priority groupings
const firstGroup = ["camel", "pascal", "snake", "kebab", "title"];
const secondGroup = ["vowel", "consonant"];
const thirdGroup = ["upper", "lower"];

// helper functions
const camelCase = function (input) {
  let camelCased = "";
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === " ") {
      camelCased += input.charAt(i + 1).toUpperCase();
      i++;
    } else {
      camelCased += input.charAt(i);
    }
  }
  return camelCased;
}

const pascalCase = function (input) {
  let pascalCased = input.charAt(0).toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i) === " ") {
      pascalCased += input.charAt(i + 1).toUpperCase();
      i++;
    } else {
      pascalCased += input.charAt(i);
    }
  }
  return pascalCased;
}

const snakeCase = function (input) {
  return input.replace(/ /g, "_");
}

const kebabCase = function (input) {
  return input.replace(/ /g, "-");
}

const titleCase = function (input) {
  let titleCased = input.charAt(0).toUpperCase();
  for (let i = 1; i < input.length; i++) {
    if (input.charAt(i) === " ") {
      titleCased += " " + input.charAt(i + 1).toUpperCase();
      i++;
    } else {
      titleCased += input.charAt(i);
    }
  }
  return titleCased;
}

const vowelCase = function (input) {
  let vowelCased = "";
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "a" || input.charAt(i) === "e" || input.charAt(i) === "i" || input.charAt(i) === "o" || input.charAt(i) === "u") {
      vowelCased += input.charAt(i).toUpperCase();
    } else {
      vowelCased += input.charAt(i);
    }
  }
  return vowelCased;
}

const consonantCase = function (input) {
  let consonantCased = "";
  for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "a" || input.charAt(i) === "e" || input.charAt(i) === "i" || input.charAt(i) === "o" || input.charAt(i) === "u") {
      consonantCased += input.charAt(i);
    } else {
      consonantCased += input.charAt(i).toUpperCase();
    }
  }
  return consonantCased;
}

const upperCase = function (input) {
  return input.toUpperCase();
}

const lowerCase = function (input) {
  return input.toLowerCase();
}

// pairs of case names and respective functions
const caseStylings = {
  "camel": camelCase,
  "pascal": pascalCase,
  "snake": snakeCase,
  "kebab": kebabCase,
  "title": titleCase,
  "vowel": vowelCase,
  "consonant": consonantCase,
  "upper": upperCase,
  "lower": lowerCase
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));