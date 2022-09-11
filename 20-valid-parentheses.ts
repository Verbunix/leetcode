function isValid(s: string): boolean {
  const openBrackets = new Map([
    ['[', ']'],
    ['{', '}'],
    ['(', ')'],
  ]);
  if (openBrackets.get(s[s.length - 1])) return false;

  const stackOfBrackets: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const el = s[i];

    // If it's a first bracket or just another left(open) bracket - add it to stack
    if (openBrackets.get(el)) {
      stackOfBrackets.push(el);
      continue;
    }

    // If it's right(close) bracket - check with the latest bracket in stack
    const closeMirrorEl = openBrackets.get(stackOfBrackets.pop());
    if (el === closeMirrorEl) continue;

    return false;
  }

  if (stackOfBrackets.length) return false;
  return true;
}

// console.log(isValid('()')); // true
// console.log(isValid('()[]{}')); // true
// console.log(isValid('(]')); // false
// console.log(isValid('})')); // false
// console.log(isValid('({[][]})')); // true
// console.log(isValid('}{')); // false
// console.log(isValid('((')); // false
