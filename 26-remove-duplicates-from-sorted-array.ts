function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i + 1] > nums[i]) {
      continue;
    };

    nums.splice(i, 1);
    --i;
  }

  return nums.length;
}

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
// console.log(removeDuplicates([1, 1, 2]));
