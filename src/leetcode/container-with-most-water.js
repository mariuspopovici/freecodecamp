/**
 * We have to maximize the Area that can be formed between the vertical lines using the shorter line as length
 * and the distance between the lines as the width of the rectangle forming the area.
 *
 * @param {Array} height
 */
const maxArea = height => {
  let max = 0;
  for (let i = 0; i < height.length; i++) {
    for (let j = 0; j < height.length; j++) {
      if (i !== j) {
        max = Math.max(max, Math.abs(j - i) * Math.min(height[i], height[j]));
      }
    }
  }

  return max;
};

/**
 * Using a two-pointer approach. Starts from opposite ends and move inwards. At each step the end with the shorter height is the one that moves,
 * while the other end stays in place.
 *
 * @param {Array} height
 */
const maxArea2 = height => {
  let max = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};

console.log(maxArea2([1, 8, 6, 2, 5, 4, 8, 3, 7]));

export { maxArea2 as maxArea };
