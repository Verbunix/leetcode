// function mySqrt(x: number): number {
//   return Number((x ** 0.5).toString().split('.')[0]);
// }

function mySqrt(x: number): number {
  let res = 0;

  while (true) {
    const y = res * res;
    if (y > x) return res - 1;
    if (y === x) return res;
    res++;
  }
}

// console.log(mySqrt(4)); // 2
// console.log(mySqrt(8)); // 2
