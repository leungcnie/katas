/*
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. However, 
since someone could look over your shoulder, you don't want that shown on your screen. 
Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

EXAMPLES:
maskify("4556364607935616") == "############5616"
maskify(     "64607935616") ==      "#######5616"
maskify(               "1") ==                "1"
maskify(                "") ==                 ""
*/

// My solution
function maskify(cc) {
  const arr = cc
    .split("")
    .reverse()
    .map((e, index) => {
      if (index < 4) {
        return e;
      } else {
        return "#";
      }
    });
  return arr.reverse().join("");
}

// Highest voted answer
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}
