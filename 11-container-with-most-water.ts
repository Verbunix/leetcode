function maxArea(height: number[]): number {
  let maxArea = 0;
  let i = 0
  let j = height.length - 1;

  while (i < height.length && j > 0 && i < j) {
    const pointLeft = height[i];
    const pointRight = height[j];

    const edge = Math.min(pointLeft, pointRight);
    const area = (j - i) * edge;
    maxArea = Math.max(area, maxArea);

    if (pointLeft > pointRight) {
      j--;
      continue;
    }
    i++;
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1