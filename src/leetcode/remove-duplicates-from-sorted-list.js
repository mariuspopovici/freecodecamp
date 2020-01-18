import { listFromArray, listToArray, printList, ListNode } from './list';

/**
 * Given a sorted linked list, delete all duplicates such that each element appear only once.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = head => {
  // compare current and next elements to find duplicates.
  // link to next next to remove the first duplicate
  let current = head;
  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

/**
 * Given a sorted linked list, delete all nodes that have duplicate numbers,
 * leaving only distinct numbers from the original list.
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteAllDuplicates = head => {
  let current = head;
  let previous = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      let reset = current === head;
      let val = current.val;
      // loop until we skip all duplicates and
      // then link previous with first non duplicate.
      while (current && current.val === val) {
        current = current.next;
      }
      previous.next = current;
      head = reset ? current : head;
    } else {
      previous = current;
      current = current.next;
    }
  }

  return head;
};

let list = listFromArray([1, 2, 2, 3, 4, 5]);
let set = deleteDuplicates(list);
printList(set);

export { deleteDuplicates, deleteAllDuplicates };
