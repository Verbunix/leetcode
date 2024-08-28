function canConstruct(ransomNote: string, magazine: string): boolean {
  const magazineMap = new Map();
  for (let i = 0; i < magazine.length; i++) {
    const letter = magazine[i];
    
    const val = magazineMap.get(letter);
    if (!val) {
      magazineMap.set(letter, 1);
      continue;
    }

    const letterCount = Number(magazineMap.get(letter));
    magazineMap.set(letter, letterCount + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const letter = ransomNote[i];
    
    const val = magazineMap.get(letter);
    if (!val) return false;

    if (val) {
      const letterCount = Number(magazineMap.get(letter));
      if (letterCount <= 1) {
        magazineMap.delete(letter);
        continue;
      }
      magazineMap.set(letter, letterCount - 1);
    }
  }

  return true;
}
