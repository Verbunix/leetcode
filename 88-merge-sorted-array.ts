/**
 Do not return anything, modify nums1 in-place instead.
 */
 function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
}

// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3); // [1,2,2,3,5,6]
// merge([1, 2, 4, 5, 6, 0], 5, [3], 1); // [1,2,3,4,5,6]
// merge([0, 0, 3, 0, 0, 0, 0, 0, 0], 3, [-1, 1, 1, 1, 2, 3], 6); // [-1,0,0,1,1,1,2,3,3]
