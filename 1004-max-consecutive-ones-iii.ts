function longestOnes(nums: number[], k: number): number {
  let maxLong = 0;

  for (let right = 0, left = 0, zeros = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      while (zeros >= k) {
        if (maxLong > (nums.length - left)) return maxLong;
        if (nums[left] === 0) zeros--;
        left++;
      }
      zeros++;
    }
    maxLong = Math.max(maxLong, (right - left) + 1);
  }

  return maxLong;
}

// console.log(longestOnes([0, 0, 1, 1, 1, 0, 0], 0)); // 3
// console.log(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)); // 6
// console.log(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)); // 10
// console.log(longestOnes(
//   [1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1],
//   8
// )) // 25
