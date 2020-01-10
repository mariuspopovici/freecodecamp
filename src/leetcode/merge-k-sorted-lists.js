import { ListNode, listFromArray, printList } from './list';

/**
 * Merge two sorted single linked list.
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
const merge = (l1, l2) => {
  // create cursor pointers to the current element in each list
  let [c1, c2] = [l1, l2];

  if (!c1) {
    return c2;
  }

  if (!c2) {
    return c1;
  }

  // init merge list
  let l3 = new ListNode();
  let c3 = l3;

  while (c1 && c2) {
    let newNode = new ListNode();
    // compare current elements and advance the current pointer if element is selected
    if (c1.val <= c2.val) {
      c3.val = c1.val;
      c1 = c1.next;
    } else {
      c3.val = c2.val;
      c2 = c2.next;
    }

    if (c1 && c2) {
      c3.next = newNode;
      c3 = newNode;
    }
  }

  // if there are any elements not selected from each array, add them to the result
  if (c1) {
    while (c1) {
      let newNode = new ListNode(c1.val);
      c3.next = newNode;
      c3 = c3.next;
      c1 = c1.next;
    }
  }

  if (c2) {
    while (c2) {
      let newNode = new ListNode(c2.val);
      c3.next = newNode;
      c3 = c3.next;
      c2 = c2.next;
    }
  }

  return l3;
};

/**
 * Merge k Sorted Lists.
 * Start with an empty list and merge each list into the result list.
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = lists => lists.reduce((acc, val) => merge(acc, val), null);

let l1 = listFromArray([1, 4]);
let l2 = listFromArray([2, 3, 6]);
let l3 = listFromArray([2, 6]);

printList(merge(l1, l2));
printList(mergeKLists([l1, l2, l3]));

export { merge, mergeKLists };
