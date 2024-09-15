function summaryRanges(nums: number[]): string[] {
  if (!nums.length) return [];

  let result: string[] = [`${nums[0]}`];
  let ln = nums[0];
  let rn = nums[0];
  let last = `${ln}`;

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if ((element - rn) === 0) {
      rn = element;
      last = `${rn}`;
      if (result[result.length - 1] !== last) {
        result.push(last);
      }
      continue;
    };

    if ((element - rn) === 1) {
      rn = element;
      last = `${ln}->${rn}`;
      result.pop();
      result.push(last);
      continue;
    };

    if ((element - rn) > 1) {
      ln = element;
      rn = element;
      last = `${rn}`;
      result.push(last);
      continue;
    }
  }

  return result;
};

// console.log(summaryRanges([0, 1, 2, 4, 5, 7])); // ["0->2","4->5","7"]
// console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9])); // ["0","2->4","6","8->9"]
