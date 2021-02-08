/*
const calculateChange = function(total, cash) {
  let change = cash - total;
  let num = 0;
  let totalChange = {}
  while (change > 0) {
    if (change / 2000 > 0) {
      num = Math.floor(change / 2000);
      totalChange.twentyDollar = num;
      change = change - (num * 2000);
      break;
    } else if (change / 1000 > 0) {
      totalChange.tenDollar = Math.floor(change / 1000);
    } else if (change / 500 > 0) {
      totalChange.fiveDollar = Math.floor(change / 500);
    } else if (change / 200 > 0) {
      totalChange.twoDollar = Math.floor(change / 200);
    } else if (change / 100 > 0) {
      totalChange.oneDollar = Math.floor(change / 100);
    } else if (change / 25 > 0) {
      totalChange.quarter = Math.floor(change / 25);
    } else if (change / 10 > 0) {
      totalChange.dime = Math.floor(change / 10);
    } else if (change / 5 > 0) {
      totalChange.nickel = Math.floor(change / 5);
    } else if (change / 1 > 0) {
      totalChange.penny = Math.floor(change / 1);
    }
  }
};
*/


let moneyNames = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar", "quarter", "dime", "nickel", "penny"];
let moneyAmounts = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

const calculateChange = function(total, cash) {
  let change = cash - total;
  let totalChange = {};
  let i = 0;
  while (change > 0) {
      if (change / moneyAmounts[i] > 1) {
        totalChange[moneyNames[i]] = Math.floor(change / moneyAmounts[i]);
        change = change - (moneyAmounts[i] * Math.floor(change / moneyAmounts[i]));
      }
      i++; 
  }
  return totalChange;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }
*/