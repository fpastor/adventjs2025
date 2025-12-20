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

  // ----------- UTILITY: IS INSIDE BOARD -----------
  const isOutsideBoard = (x, y, boardWidth, boardHeight) => {
    return x < 0 || x > boardWidth - 1 || y < 0 || y > boardHeight - 1;
  };

  let renoIndex = boardArray.findIndex((value) => value === '@');
  // console.log(renoIndex);

  let renoPos = getPositionFromIndex(renoIndex, boardWidth, boardHeight);
  // console.log(renoPos);

  const movesArray = Array.from(moves);

  for (let i = 0; i < movesArray.length; i++) {
    if (movesArray[i] === 'U') { renoPos[1]--; }
    else if (movesArray[i] === 'D') { renoPos[1]++; }
    else if (movesArray[i] === 'L') { renoPos[0]--; }
    else if (movesArray[i] === 'R') { renoPos[0]++; }

    //console.log('Reno moves to:', renoPos)

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