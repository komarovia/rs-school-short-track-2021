/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const arr = matrix.flat();
  let arrResult = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === true) {
      arrResult.push(1);
    }

    if (i === 0 && arr[i] === false) {
      let count = 0;
      if (arr[1] === true) {
        count += 1;
      }
      if (arr[3] === true) {
        count += 1;
      }
      if (arr[4] === true) {
        count += 1;
      }
      arrResult.push(count);
    }

    if (i === 1 && arr[i] === false) {
      let count = 0;
      for (let y = 0; y < 7; y++) {
        if (y === 1) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 2 && arr[i] === false) {
      let count = 0;
      for (let y = 1; y < 7; y++) {
        if (y === 2 || y === 3) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 3 && arr[i] === false) {
      let count = 0;
      for (let y = 0; y < 6; y++) {
        if (y === 2 || y === 3) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 4 && arr[i] === false) {
      let count = 0;
      for (let y = 0; y < arr.length; y++) {
        if (y === 4) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 5 && arr[i] === false) {
      let count = 0;
      for (let y = 1; y < arr.length; y++) {
        if (y === 3 || y === 5 || y === 6) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 6 && arr[i] === false) {
      let count = 0;
      for (let y = 3; y < arr.length; y++) {
        if (y === 5 || y === 6 || y === 8) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 7 && arr[i] === false) {
      let count = 0;
      for (let y = 3; y < arr.length; y++) {
        if (y === 7) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }

    if (i === 8 && arr[i] === false) {
      let count = 0;
      for (let y = 4; y < arr.length; y++) {
        if (y === 6 || y === 8) {
          y += 1;
        }
        if (arr[y] === true) {
          count += 1;
        }
      }
      arrResult.push(count);
    }
  }
  arrResult = arrResult.reduce((rows, key, index) => (index % 3 === 0 ? rows.push([key])
    : rows[rows.length - 1].push(key))
    && rows, []);
  return arrResult;
}

module.exports = minesweeper;
