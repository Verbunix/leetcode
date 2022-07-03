/**
 * Time complexity: O(n^2)
 * Memory complexity: O(1)
 * 
 * @param s some string that may have palindrom
 * @returns the longest palindromic substring in "s"
 */
function longestPalindrome(s: string): string {
  let longP = '';

  function getPal(s: string, lIdx: number, rIdx: number): string {
    while (lIdx >= 0 && rIdx < s.length && s[lIdx] === s[rIdx]) {
      lIdx--;
      rIdx++;
    }
    return s.substring(lIdx + 1, rIdx);
  }

  for (let i = 0; i < s.length; i++) {
    const pal1 = getPal(s, i, i);
    const pal2 = getPal(s, i, i + 1);
    if (pal1.length > longP.length) longP = pal1;
    if (pal2.length > longP.length) longP = pal2;
  }

  return longP;
}

// console.log(longestPalindrome('babad')); // "bab" or "aba"
// console.log(longestPalindrome('cbbd')); // "bb"