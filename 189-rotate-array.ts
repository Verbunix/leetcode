/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (!nums.length || k === 0) return;

  // Calculate the effective number of rotations
  k = k % nums.length;

  // Rotate the array
  const rightSide = nums.splice(nums.length - k);
  nums.unshift(...rightSide);
}

// console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]
// console.log(rotate([1, 2], 3)); // [2,1]
// console.log(rotate([1, 2], 5)); // [2,1]
