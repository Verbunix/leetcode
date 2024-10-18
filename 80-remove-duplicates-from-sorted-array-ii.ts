function removeDuplicates(nums: number[]): number {
  if (nums.length === 1) return 1;

  let numLatest: number | null = null;

  for (let i = 0, j = 1; i < nums.length; i++, j++) {
    const numI = nums[i];
    const numJ = nums[j];

    if (numI === numJ) {
      if (numLatest === numI) {
        nums.splice(j, 1);
        i--;
        j--;
      }
      numLatest = numI;
      continue;
    }
    if (numJ > numI) {
      numLatest = numI;
      continue;
    }
  }

  return nums.length;
};

// console.log(removeDuplicates([1, 1, 1, 2, 2, 3])); // [1,1,2,2,3]
// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // [0,0,1,1,2,3,3]