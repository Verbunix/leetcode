function findKthLargest(nums: number[], k: number): number {
  if (!nums.length) return 0;

  const numsSorted = nums.sort((a, b) => a - b);
  return numsSorted[numsSorted.length - k];
};

// console.log(findKthLargest([99, 99], 1)); // 99
// console.log(findKthLargest([-1, 2, 0], 2)); // 0
