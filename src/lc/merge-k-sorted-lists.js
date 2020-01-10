function ListNode(val) {
  this.val = val;
  this.next = null;
}

const arrayToList = arr => {
  let head = new ListNode();
  let current = head;

  arr.forEach((element, index) => {
    current.val = element;
    if (index < arr.length) {
      let newNode = new ListNode();
      current.next = newNode;
      current = newNode;
    }
  });

  return head;
};

const mergeKLists = function(lists) {};
const merge = (l1, l2) => {
  let [c1, c2] = [l1, l2];

  let l3 = new ListNode();
  let c3 = l3;
  while (c1 && c2) {
    let newNode = new ListNode();

    console.log(`${c1.val} Vs. ${c2.val}`);

    if (c1.val < c2.val) {
      c3.val = c1.val;
      // advance in l1
      c1 = c1.next;
    } else {
      c3.val = c2.val;
      // advance in l2
      c2 = c2.next;
    }
    c3.next = newNode;
    c3 = newNode;
  }

  return l3;
};

// let l1 = arrayToList([1, 4]);
// let l2 = arrayToList([2, 3]);
// let l3 = arrayToList([2, 6]);

// console.log(merge(l1, l2));

export { merge, arrayToList };
