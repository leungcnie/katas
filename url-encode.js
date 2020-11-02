const urlEncode = function(text) {
  text = text.trim();
  let encodedString = "";
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === " ") {
      encodedString += "%20";
    } else {
      encodedString += text.charAt(i);
    }
  }
  return encodedString;
};


// TESTS
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
/* EXPECTED
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/
