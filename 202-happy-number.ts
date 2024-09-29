function isHappy(n: number): boolean {

  function isLocalHappy(n: number, nTry: number) {
    const nStr = n.toString();
    let happyNumber = 0;
    for (let i = 0; i < nStr.length; i++) {
      const el = Number(nStr[i]);
      happyNumber += Math.pow(el, 2);
    }

    if (happyNumber === 1) return true;
    if (happyNumber === n) return false;
    if (nTry > 9) return false;
    return isLocalHappy(happyNumber, nTry + 1);
  }

  return isLocalHappy(n, 0);
};

// console.log(isHappy(19)); // true
// console.log(isHappy(2)); // false
