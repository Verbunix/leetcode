function isValidSudoku(board: string[][]): boolean {
  const box1 = new Map();
  const box2 = new Map();
  const box3 = new Map();
  const box4 = new Map();
  const box5 = new Map();
  const box6 = new Map();
  const box7 = new Map();
  const box8 = new Map();
  const box9 = new Map();

  const row1 = new Map();
  const row2 = new Map();
  const row3 = new Map();
  const row4 = new Map();
  const row5 = new Map();
  const row6 = new Map();
  const row7 = new Map();
  const row8 = new Map();
  const row9 = new Map();

  const col1 = new Map();
  const col2 = new Map();
  const col3 = new Map();
  const col4 = new Map();
  const col5 = new Map();
  const col6 = new Map();
  const col7 = new Map();
  const col8 = new Map();
  const col9 = new Map();

  function addItem(i: number, j: number, val: string) {
    // BOXES
    if (i >= 1 && i <= 3 && j >= 1 && j <= 3) {
      if (box1.get(val)) return false;
      box1.set(val, val);
    }
    if (i >= 4 && i <= 6 && j >= 1 && j <= 3) {
      if (box2.get(val)) return false;
      box2.set(val, val);
    }
    if (i >= 7 && i <= 9 && j >= 1 && j <= 3) {
      if (box3.get(val)) return false;
      box3.set(val, val);
    }
    if (i >= 1 && i <= 3 && j >= 4 && j <= 6) {
      if (box4.get(val)) return false;
      box4.set(val, val);
    }
    if (i >= 4 && i <= 6 && j >= 4 && j <= 6) {
      if (box5.get(val)) return false;
      box5.set(val, val);
    }
    if (i >= 7 && i <= 9 && j >= 4 && j <= 6) {
      if (box6.get(val)) return false;
      box6.set(val, val);
    }
    if (i >= 1 && i <= 3 && j >= 7 && j <= 9) {
      if (box7.get(val)) return false;
      box7.set(val, val);
    }
    if (i >= 4 && i <= 6 && j >= 7 && j <= 9) {
      if (box8.get(val)) return false;
      box8.set(val, val);
    }
    if (i >= 7 && i <= 9 && j >= 7 && j <= 9) {
      if (box9.get(val)) return false;
      box9.set(val, val);
    }

    // ROWS
    if (i === 1) {
      if (row1.get(val)) return false;
      row1.set(val, val);
    }
    if (i === 2) {
      if (row2.get(val)) return false;
      row2.set(val, val);
    }
    if (i === 3) {
      if (row3.get(val)) return false;
      row3.set(val, val);
    }
    if (i === 4) {
      if (row4.get(val)) return false;
      row4.set(val, val);
    }
    if (i === 5) {
      if (row5.get(val)) return false;
      row5.set(val, val);
    }
    if (i === 6) {
      if (row6.get(val)) return false;
      row6.set(val, val);
    }
    if (i === 7) {
      if (row7.get(val)) return false;
      row7.set(val, val);
    }
    if (i === 8) {
      if (row8.get(val)) return false;
      row8.set(val, val);
    }
    if (i === 9) {
      if (row9.get(val)) return false;
      row9.set(val, val);
    }

    // COLS
    if (j === 1) {
      if (col1.get(val)) return false;
      col1.set(val, val);
    }
    if (j === 2) {
      if (col2.get(val)) return false;
      col2.set(val, val);
    }
    if (j === 3) {
      if (col3.get(val)) return false;
      col3.set(val, val);
    }
    if (j === 4) {
      if (col4.get(val)) return false;
      col4.set(val, val);
    }
    if (j === 5) {
      if (col5.get(val)) return false;
      col5.set(val, val);
    }
    if (j === 6) {
      if (col6.get(val)) return false;
      col6.set(val, val);
    }
    if (j === 7) {
      if (col7.get(val)) return false;
      col7.set(val, val);
    }
    if (j === 8) {
      if (col8.get(val)) return false;
      col8.set(val, val);
    }
    if (j === 9) {
      if (col9.get(val)) return false;
      col9.set(val, val);
    }

    return true;
  }

  for (let i = 0; i < board.length; i++) {
    const row = board[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === '.') continue;
      const result = addItem(i + 1, j + 1, item);
      if (!result) return false;
    }
  }

  return true;
};

// console.log(isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])); // true
// console.log(isValidSudoku([[".", ".", "5", ".", ".", ".", ".", ".", "."], ["1", ".", ".", "2", ".", ".", ".", ".", "."], [".", ".", "6", ".", ".", "3", ".", ".", "."], ["8", ".", ".", ".", ".", ".", ".", ".", "."], ["3", ".", "1", "5", "2", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "4", "."], [".", ".", "6", ".", ".", ".", ".", ".", "."], [".", ".", ".", ".", ".", ".", ".", "9", "."], [".", ".", ".", ".", ".", ".", ".", ".", "."]])); // false
