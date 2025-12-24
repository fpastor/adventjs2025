/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  // ---------- CONVERTS STRING TO ARRAY ----------
  let boardArray = Array.from(board);
  boardArray = boardArray.filter((item) => item !== '\n');

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
    result[1] = Math.floor(index / width);
    return result;
  }

  // ---------- UTILITY: GET CONTENT FROM POSITION ----------
  const getContentFromPosition = (x, y, boardArray, width) => {
    const index = (y * width) + x;
    return boardArray[index];
  };

  // ----------- UTILITY: IS INSIDE BOARD -----------
  const isOutsideBoard = (x, y, boardWidth, boardHeight) => {
    return x < 0 || x > boardWidth - 1 || y < 0 || y > boardHeight - 1;
  };

  let renoIndex = boardArray.findIndex((value) => value === '@');

  let renoPos = getPositionFromIndex(renoIndex, boardWidth, boardHeight);

  const movesArray = Array.from(moves);

  for (let i = 0; i < movesArray.length; i++) {
    if (movesArray[i] === 'U') { renoPos[1]--; }
    else if (movesArray[i] === 'D') { renoPos[1]++; }
    else if (movesArray[i] === 'L') { renoPos[0]--; }
    else if (movesArray[i] === 'R') { renoPos[0]++; }

    if (
      isOutsideBoard(renoPos[0], renoPos[1], boardWidth, boardHeight) ||
      getContentFromPosition(renoPos[0], renoPos[1], boardArray, boardWidth) === '#') {
      return 'crash';
    };
    if (getContentFromPosition(renoPos[0], renoPos[1], boardArray, boardWidth) === '*') {
      return 'success';
    };
  }
  return 'fail';
}


const board = `
.....
.*#.*
.@...
.....
`

console.log('***', moveReno(board, 'D'), 'fail');
// ➞ 'fail' -> se mueve pero no recoge nada

console.log('***', moveReno(board, 'U'), 'success');
// // ➞ 'success' -> recoge algo (*) justo encima

console.log('***', moveReno(board, 'RU'), 'crash');
// // ➞ 'crash' -> choca contra un obstáculo (#)

console.log('***', moveReno(board, 'RRRUU'), 'success');
// // ➞ 'success' -> recoge algo (*)

console.log('***', moveReno(board, 'DD'), 'crash');
// // ➞ 'crash' -> se choca con la parte de abajo del tablero

console.log('***', moveReno(board, 'UUU'), 'success');
// // ➞ 'success' -> recoge algo del suelo (*) y luego se choca por arriba

console.log('***', moveReno(board, 'RR'), 'fail');
// // ➞ 'fail' -> se mueve pero no recoge nada