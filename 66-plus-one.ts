function plusOne(digits: number[]): number[] {
  const num = BigInt(digits.toString().toString().replace(/,/g, ''));
  return Array.from((num + BigInt(1)).toString()).map(i => Number(i));
}

// console.log(plusOne([1, 2, 3])); // [1,2,4]
// console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
// console.log(plusOne([9])); // [1,0]
// console.log(plusOne([9, 9])); // [1,0,0]
// console.log(plusOne([8, 9, 9, 9])); // [9,0,0,0]
// console.log(plusOne([9, 8, 9])); // [9,9,0]
