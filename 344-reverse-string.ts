/**
 Do not return anything, modify s in-place instead.
 */
function reverseString(s: string[]): void {
  for (let i = 0; i < s.length; i++) {
    s.push(s[(s.length - 1) - i]);
    i++;
  }
  s.splice(0, Math.floor(s.length / 2));
};

// const arr = ['h', 'e', 'l', 'l', 'o'];
// reverseString(arr); // ['o','l','l','e','h']
// console.log(arr);
