function letterCombinations(digits: string): string[] {
  if (!digits.length) return [];

  const digitsKeyboard: Map<string, string[]> = new Map();
  digitsKeyboard.set('d2', ['a', 'b', 'c']);
  digitsKeyboard.set('d3', ['d', 'e', 'f']);
  digitsKeyboard.set('d4', ['g', 'h', 'i']);
  digitsKeyboard.set('d5', ['j', 'k', 'l']);
  digitsKeyboard.set('d6', ['m', 'n', 'o']);
  digitsKeyboard.set('d7', ['p', 'q', 'r', 's']);
  digitsKeyboard.set('d8', ['t', 'u', 'v']);
  digitsKeyboard.set('d9', ['w', 'x', 'y', 'z']);

  let result: string[] = [];
  const keyInput = Array.from(digits, (i) => `d${i}`);

  function getCombinations(key: string, previousCombinations: string[]) {
    const keys = digitsKeyboard.get(key);
    if (!previousCombinations.length) return keys;

    let combinationWithKey: string[] = [];
    for (let i = 0; i < keys.length; i++) {
      const letter = keys[i];
      for (let j = 0; j < previousCombinations.length; j++) {
        const previousCombination = previousCombinations[j];
        combinationWithKey.push(`${previousCombination}${letter}`);
      }
    }
    return combinationWithKey;
  }

  for (let i = 0; i < keyInput.length; i++) {
    result = getCombinations(keyInput[i], result);
  }

  return result;
};
