function isPalindrome(s: string): boolean {
  const specialChars = new Set([
    ' ',
    '`',
    '/',
    '[',
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '_',
    '+',
    '\\',
    '-',
    '=',
    '[',
    ']',
    '{',
    '}',
    ';',
    ',',
    '\'',
    ':',
    '"',
    '|',
    ',',
    '.',
    '<',
    '>',
    '/',
    '?',
    ']',
    '+',
    '/',
    ';',
  ]);

  if (s.length <= 1) return true;

  for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
    const head = s[i].toLowerCase();
    const tail = s[j].toLowerCase();
    if (specialChars.has(head)) {
      j++;
      continue;
    }
    if (specialChars.has(tail)) {
      i--;
      continue;
    }
    if (head !== tail) return false;
  }
  return true;
};


// console.log(isPalindrome('A man, a plan, a canal: Panama')); // true
// console.log(isPalindrome('race a car')); // false
// console.log(isPalindrome(' ')); // false
