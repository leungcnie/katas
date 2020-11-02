const urlDecode = function (text) {
  text = text.replace(/%20/g, " ");
  let decoded = {};
  let pairs = text.split("&");
  for (let i = 0; i < pairs.length; i++) {
    let keyValues = pairs[i].split("=");
    decoded[keyValues[0]] = keyValues[1];
  }
  return decoded;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
