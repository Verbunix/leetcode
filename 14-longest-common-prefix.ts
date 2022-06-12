function longestCommonPrefix(strs: string[]): string {
  let prefix = strs[0];

  for (let i = 0, j = prefix.length; i < (strs.length || prefix.length === 0); i++) {
    if (strs[i + 1] && prefix.length > strs[i + 1].length) {
      prefix = strs[i + 1];
      i = 0;
      j = prefix.length;
    };
    while (j >= 0) {
      prefix = prefix.substring(0, j);
      if (strs[i].indexOf(prefix) === 0) break;
      j--;
    }
  }

  return prefix;
}

// console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
// console.log(longestCommonPrefix(['reflower','flow','flight']));
// console.log(longestCommonPrefix(['dog', 'racecar', 'car']));
