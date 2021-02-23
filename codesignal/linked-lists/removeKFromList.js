// Singly-linked lists are already defined with this interface:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function removeKFromList(l, k) {
  let curr = l;
  let dummy = new ListNode(0);
  let prev = dummy;
  while (curr !== null) {
      if (curr.value !== k) {
         let node = new ListNode(curr.value); 
         prev.next = node;  
         prev = node;
      }
      curr = curr.next;
  }
  
  return dummy.next;
}