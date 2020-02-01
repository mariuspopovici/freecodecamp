/**
 * Given a singly linked list, group all odd nodes together followed by the even nodes.
 * Please note here we are talking about the node number and not the value in the nodes.
 *
 * @param {ListNode} head the list start element
 * @return {ListNode} the odd-even list start element
 */
import { listFromArray, listToArray } from './list';
const oddEvenList = head => {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  let evenHead = even;

  while (even && even.next) {
    odd.next = even.next;
    odd = odd.next;
    even.next = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head;
};

let list = listFromArray([1, 2, 3, 4, 5]);
let newList = listToArray(oddEvenList(list));

console.log(newList);
