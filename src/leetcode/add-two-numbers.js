import { ListNode, listFromArray, printList } from './list';

/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = function(l1, l2) {
  let [current1, current2] = [l1, l2];
  let carry = 0;
  let l3 = new ListNode(0);
  let current3 = l3;

  while (current1 || current2) {
    let val1 = current1 ? current1.val : 0;
    let val2 = current2 ? current2.val : 0;
    let sum = current3.val + val1 + val2;

    current3.val = sum % 10;
    carry = Math.floor(sum / 10);

    console.log(`Added: ${val1} + ${val2} = ${sum} Carry: ${carry}`);

    // move next
    if (current1) {
      current1 = current1.next;
    }
    if (current2) {
      current2 = current2.next;
    }

    if (carry > 0 || current1 || current2) {
      let newNode = new ListNode(carry);
      current3.next = newNode;
      current3 = newNode;
    }
  }

  return l3;
};

const l1 = listFromArray([5]);
const l2 = listFromArray([5]);

const l3 = addTwoNumbers(l1, l2);

printList(l3);
