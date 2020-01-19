import { listFromArray, listToArray, printList, ListNode } from './list';

const removeNthFromEnd = (head, n) => {
  let count = 0;
  let current = head;
  while (current) {
    count++;
    current = current.next;
  }
  let index = 0;
  current = head;
  while (index < count - n - 1) {
    current = current.next;
    index++;
  }
  current.next = current.next ? current.next.next : null;

  return head;
};

const removeNthFromEndOnePass = (head, n) => {
  if (head === null) {
    return head;
  }

  let current = head;
  let trail = head;
  let count = 0;
  while (current) {
    current = current.next;
    count++;
    if (count > n + 1) {
      trail = trail.next;
    }
  }

  if (count === 1) {
    return null;
  } else if (count === n) {
    head = trail.next;
  } else {
    trail.next = trail.next ? trail.next.next : null;
  }

  return head;
};

let list = listFromArray([1, 2, 3, 4, 5, 6, 7]);
let newList = removeNthFromEndOnePass(list, 7);

printList(newList);

export { removeNthFromEnd, removeNthFromEndOnePass };
