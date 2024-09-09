function searchInsert(nums: number[], target: number): number {
  if (!nums.length) return 0;
  if (nums[0] > target) return 0;
  if (nums[nums.length - 1] < target) return nums.length;

  let left = 0;
  let right = nums.length - 1;

  while (right >= left) {
    const mid = Math.floor((left + right) / 2);

    if (target === nums[mid]) {
      return mid; // Target found
    }
    if (target > nums[mid]) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  // If target is not found, left will be the insertion position
  return left;
}

// console.log(searchInsert([1, 3, 5, 6], 5)); // 2
// console.log(searchInsert([1, 3, 5, 6], 2)); // 2
// console.log(searchInsert([1, 3, 5, 6], 7)); // 4
// console.log(searchInsert([1, 3, 5, 6], 0)); // 0
// console.log(searchInsert([1, 3], 0)); // 0
// console.log(searchInsert([1, 3], 2)); // 0
// console.log(searchInsert([1, 2, 3, 4, 5, 10], 2)); // 1
// console.log(searchInsert([1, 3, 5], 3)); // 1
// console.log(searchInsert([1, 3, 5], 4)); // 2
// console.log(searchInsert([1, 3, 5], 5)); // 2
// console.log(searchInsert([1, 2, 4, 6, 7], 3)); // 2
// console.log(searchInsert([2, 7, 8, 9, 10], 9)); // 3
