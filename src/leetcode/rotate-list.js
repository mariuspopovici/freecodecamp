import { ListNode, listFromArray, printList } from './list';

/**
 * Given a linked list, rotate the list to the right by k places,
 * where k is non-negative.
 *
 * Example 1:
 *  Input: 1->2->3->4->5->NULL, k = 2
 *  Output: 4->5->1->2->3->NULL
 * Explanation:
 *  rotate 1 steps to the right: 5->1->2->3->4->NULL
 *  rotate 2 steps to the right: 4->5->1->2->3->NULL
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRight = (head, k) => {
  if (head === null || head.next === null) {
    return head;
  }

  let current = head;
  let count = 1;

  // find the last element of the list and the length
  while (current.next) {
    current = current.next;
    count++;
  }

  // link last element to head
  current.next = head;

  // advance head until the element before rotation start.
  let start = count - (k % count) - 1;
  for (let i = 0; i < start; i++) {
    head = head.next;
  }

  // set new list head
  let result = head.next;
  head.next = null;

  return result;
};

let arr = listFromArray([0, 1, 2, 3, 4, 5]);
let rotated = rotateRight(arr, 2);

printList(rotated);

export { rotateRight };
