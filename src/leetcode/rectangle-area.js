/**
 * Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.
 * The first rectangle is defined by its bottom-left corner (ax1, ay1) and its top-right corner (ax2, ay2).
 * The second rectangle is defined by its bottom-left corner (bx1, by1) and its top-right corner (bx2, by2).
 *
 */
const computeArea = (ax1, ay1, ax2, ay2, bx1, by1, bx2, by2) => {
  const ix1 = Math.max(ax1, bx1);
  const ix2 = Math.min(ax2, bx2);
  const iy1 = Math.max(ay1, by1);
  const iy2 = Math.min(ay2, by2);
  const intersects = ix1 < ix2 && iy1 < iy2;

  return (
    area(ax1, ay1, ax2, ay2) +
    area(bx1, by1, bx2, by2) -
    (intersects ? area(ix1, iy1, ix2, iy2) : 0)
  );
};

const area = (x1, y1, x2, y2) => {
  return Math.abs((x2 - x1) * (y2 - y1));
};

// ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2
console.log(computeArea(-2, -2, 2, 2, 3, 3, 4, 4));

export { computeArea };
