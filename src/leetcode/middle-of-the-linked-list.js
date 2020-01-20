import { listFromArray } from './list';

/**
 * Given a non-empty, singly linked list with head node head, return a middle node of linked list.
 * If there are two middle nodes, return the second middle node.
 *
 * @param {ListNode} head
 */
const middleNode = head => {
  let double = head;
  while (double && double.next) {
    double = double.next ? double.next.next : null;
    head = head.next;
  }

  return head;
};

let list = listFromArray([1, 2, 3, 4, 5]);
console.log(middleNode(list));
