function romanToInt(s: string): number {
  const romanMap = new Map<string, number>(Object.entries({
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }));

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = romanMap.get(s[i]);
    if (!cur) continue;
    const next1 = romanMap.get(s[i + 1]);
    const next2 = romanMap.get(s[i + 2]);

    // last element
    if (!next1) {
      result = result + cur;
      continue;
    };

    // duo, trio
    if (cur === next1) {
      i = i + 1;
      result = result + cur + next1;
      if (next1 === next2) {
        result = result + next2;
        i = i + 1;
      }
      continue;
    }

    // decrease next1
    if (next1 > cur) {
      i = i + 1;
      result = result + (next1 - cur);
      continue;
    }

    result = result + cur;
  }

  return result;
};

// console.log(romanToInt('LVIII'));
