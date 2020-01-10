/**
 * Initializes a linked list node.
 *
 * @param {Number} val
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * Initializes a linked list from an array of numbers.
 *
 * @param {Array} arr
 */
const listFromArray = arr => {
  let [first, ...rest] = arr;
  const head = new ListNode(first);
  let current = head;
  rest.forEach(item => {
    const newItem = new ListNode(item);
    current.next = newItem;
    current = newItem;
  });

  return head;
};

/**
 * Pretty prints a single linked list of **ListNode** elements to the console.
 * @param {ListNode} list
 */
const printList = list => {
  let current = list;
  let str = '';
  do {
    str += ` ${current.val} ${current.next ? '->' : ''} `;
    current = current.next;
  } while (current);

  console.log(str);
};

export { ListNode, listFromArray, printList };
