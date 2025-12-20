/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  const toArray2D = (boardString) => {
    const result = [];
    const boardArray = Array.from(boardString);
    let row = 0;
    let column = 0;
    for (i = 1; i < boardArray.length - 1; i++) {
      if (boardArray[i] === "\n") {
        row++;
        column = 0;
        continue;
      }
      if (!result[row]) result[row] = [];
      if (!result[row][column]) {
        result[row][column] = boardArray[i];
        column++
      }
    }
    return result;
  };

  // ---------- CONVERTS STRING TO ARRAY ----------
  let boardArray = Array.from(board);
  boardArray = boardArray.filter((item) => item !== '\n');
  // console.log(boardArray);

  // ---------- OBTAIN BOARD DIMENSION FORM STRING ----------
  const getBoardWidth = (board) => {
    let boardWidth = 0;
    for (let i = 1; board[i] !== '\n'; i++) {
      boardWidth++;
    }
    return boardWidth;
  }
  const boardWidth = getBoardWidth(board);
  const boardHeight = boardArray.length / boardWidth;

  // ---------- UTILITY: GET POSITION FROM INDEX ----------
  const getPositionFromIndex = (index, width, height) => {
    const result = [];
    result[0] = index % width;
    result[1] = Math.floor(index / height);
    return result;
  }

  // ---------- UTILITY: GET CONTENT FROM POSITION ----------
  const getContentFromPosition = (x, y, boardArray, width) => {
    const index = (y * width) + x;
    return boardArray[index];
  };

  let renoIndex = boardArray.findIndex((value) => value === '@');
  console.log(renoIndex);

  let renoPos = getPositionFromIndex(renoIndex, boardWidth, boardHeight);
  console.log(renoPos);

  return 'fail';
}

const board = `
.....
.*#.*
.@...
.....
`

moveReno(board, 'D')
// ➞ 'fail' -> se mueve pero no recoge nada

// moveReno(board, 'U')
// // ➞ 'success' -> recoge algo (*) justo encima

// moveReno(board, 'RU')
// // ➞ 'crash' -> choca contra un obstáculo (#)

// moveReno(board, 'RRRUU')
// // ➞ 'success' -> recoge algo (*)

// moveReno(board, 'DD')
// // ➞ 'crash' -> se choca con la parte de abajo del tablero

// moveReno(board, 'UUU')
// // ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

// moveReno(board, 'RR')
// // ➞ 'fail' -> se mueve pero no recoge nada