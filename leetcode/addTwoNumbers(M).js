/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// First solution: fails for big numbers
var addTwoNumbers = function (l1, l2) {
  let list1 = l1;
  let numStr1 = l1.val.toString();
  while (list1.next !== null) {
    numStr1 += list1.next.val.toString();
    list1 = list1.next;
  }

  let list2 = l2;
  let numStr2 = l2.val.toString();
  while (list2.next !== null) {
    numStr2 += list2.next.val.toString();
    list2 = list2.next;
  }

  const num1 = Number(numStr1.split("").reverse().join(""));
  const num2 = Number(numStr2.split("").reverse().join(""));

  console.log(num1, num2);
  const sum = num1 + num2;
  console.log(sum);

  const sumArr = sum
    .toString()
    .split("")
    .map(s => Number(s));
  console.log("sumArr", sumArr);
  if (sumArr.length === 1) {
    const output = new ListNode(sumArr[0], null);
    return output;
  }
  let next = new ListNode(sumArr.slice(0, 1), null);
  let current;
  for (let i = 1; i < sumArr.length; i++) {
    current = new ListNode(sumArr[i], next);
    next = current;
  }
  return current;
};

// Second try
var addTwoNumbers = function (l1, l2) {
  let node1 = l1;
  let node2 = l2;
  let dummy = new ListNode(0); //points to head
  let prev = dummy;
  let carry = 0;
  while (node1 !== null && node2 !== null) {
    let value = carry + node1.val + node2.val;
    if (value > 9) {
      carry = (value - (value % 10)) / 10;
      value = value % 10;
    } else {
      carry = 0;
    }

    node1 = node1.next;
    node2 = node2.next;

    let cur = new ListNode(value);
    // set current node as the previous node's "next"
    prev.next = cur;
    // set current node as previous node before forward
    prev = cur;
  }

  let remaining = node1 || node2;

  if (remaining) {
    while (remaining !== null) {
      console.log(remaining);
      let value = carry + remaining.val;
      if (value > 9) {
        carry = (value - (value % 10)) / 10;
        value = value % 10;
      } else {
        carry = 0;
      }

      remaining = remaining.next;

      let cur = new ListNode(value);
      prev.next = cur;
      prev = cur;
    }
  }

  if (carry) {
    let cur = new ListNode(carry);
    prev.next = cur;
  }

  return dummy.next;
};
