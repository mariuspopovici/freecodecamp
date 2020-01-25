const generate = numRows => {
  if (numRows <= 0) {
    return [];
  }

  let rows = [[1]];
  for (let i = 1; i < numRows; i++) {
    let previousRow = rows[i - 1];
    let newRow = [];
    for (let j = 0; j < previousRow.length + 1; j++) {
      let left = j > 0 ? previousRow[j - 1] : 0;
      let right = j < previousRow.length ? previousRow[j] : 0;
      newRow.push(left + right);
    }
    rows.push(newRow);
  }

  return rows;
};

console.log(generate(5));

export { generate };
