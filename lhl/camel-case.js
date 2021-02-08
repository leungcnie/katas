const camelCase = function (input) {
  let camelCased = "";
  if (!input.includes(" ")) {
    return input;
  } else {
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
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
