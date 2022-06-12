function isPalindrome(x: number): boolean {
  if (x >= 0 && x <= 9) return true;

  const list = String(x);
  for (let i = 0, j = list.length - 1; i <= j; i++, j--) {
    if (list[i] !== list[j]) return false;
  }
  return true;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
