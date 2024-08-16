function removeElement(nums: number[], val: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }

  return nums.length
}


// const nums1 = [3, 2, 2, 3];
// removeElement(nums1, 3);
// console.log(nums1); // [2,2]

// const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
// removeElement(nums2, 2);
// console.log(nums2); // [0, 1, 4, 0, 3]
