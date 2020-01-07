/**
 * Design a cash register drawer function checkCashRegister() that accepts purchase
 * price as the first argument (price), payment as the second argument (cash),
 * and cash-in-drawer (cid) as the third argument.
 * cid is a 2D array listing available currency.
 *
 * The checkCashRegister() function should always return an object with a status key and a change key.
 *
 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due,
 * or if you cannot return the exact change.
 *
 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change
 * if it is equal to the change due.
 *
 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills,
 * sorted in highest to lowest order, as the value of the change key.
 *
 * @param {Number} price
 * @param {Number} cash
 * @param {Number} cid
 */
const checkCashRegister = (price, cash, cid) => {
  const money = [
    { name: 'ONE HUNDRED', value: 100 },
    { name: 'TWENTY', value: 20 },
    { name: 'TEN', value: 10 },
    { name: 'FIVE', value: 5 },
    { name: 'ONE', value: 1 },
    { name: 'QUARTER', value: 0.25 },
    { name: 'DIME', value: 0.1 },
    { name: 'NICKEL', value: 0.05 },
    { name: 'PENNY', value: 0.01 }
  ];

  const drawer = new Map(cid);
  // calculate total amount in drawer
  const totalInDrawer = cid.reduce((acc, val) => acc + val[1], 0);

  let due = cash - price;

  if (due === totalInDrawer) {
    return { status: 'CLOSED', change: cid };
  }

  let change = [];

  money.forEach(kind => {
    // calculate required quantity of each kind and remainder
    let qty = Math.floor(due / kind.value);
    let rest = Math.round((due % kind.value) * 100) / 100; // round up to 2 decimals
    let requiredItemAmount = qty * kind.value;
    let availableItemAmount = drawer.get(kind.name);

    if (qty > 0) {
      if (requiredItemAmount < availableItemAmount) {
        // if there's enough in the drawer for current kind take it and the rest will be due  in next iteration
        change.push([kind.name, requiredItemAmount]);
        due = rest;
      } else {
        // take maximum available amount and calculated the new amount due
        change.push([kind.name, availableItemAmount]);
        due =
          Math.round((requiredItemAmount - availableItemAmount + rest) * 100) /
          100;
      }
    }
  });

  if (due > 0) {
    return { status: 'INSUFFICIENT_FUNDS', change: [] };
  } else {
    return { status: 'OPEN', change };
  }
};

export { checkCashRegister };
