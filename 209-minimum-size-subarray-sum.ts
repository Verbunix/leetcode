function minSubArrayLen(target: number, nums: number[]): number {
  let sum = 0;
  let result = Number.MAX_VALUE;

  for (let i = 0, j = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    while (sum >= target) {
      result = Math.min(result, i - j + 1);
      if (result === 1) return 1;

      sum = sum - nums[j];
      j++;
    }
  }

  return result === Number.MAX_VALUE ? 0 : result;
};

// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); // 2
// console.log(minSubArrayLen(123, [1, 1, 1, 1, 1, 1, 1, 1])); // 2
