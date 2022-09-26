function climbStairs(n: number): number {
  const combos = new Map([[0, 0], [1, 1], [2, 2], [3, 3], [4, 5]]);
  let i = 5;
  while (n >= i) {
    combos.set(i, combos.get(i - 1) + combos.get(i - 2))
    i++;
  }
  return combos.get(n);
}

// console.log(climbStairs(4)); // 5
// console.log(climbStairs(5)); // 8
// console.log(climbStairs(6)); // 13
