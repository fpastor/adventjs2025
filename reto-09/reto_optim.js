/**
 * @param {string} board - Represent the board situation
 * @param {string} moves - Movement direction
 * @returns {'fail' | 'crash' | 'success'}
 */
function moveReno(board, moves) {
  // ---------- PARSE BOARD TO 2D ARRAY ----------
  const lines = board.split('\n').filter(line => line.length > 0);
  const boardWidth = lines[0].length;
  const boardHeight = lines.length;
  const boardArray = lines.join('');

  // ---------- UTILITY: GET POSITION FROM INDEX ----------
  const getPositionFromIndex = (index, width) => {
    return [index % width, Math.floor(index / width)];
  }

  // ---------- UTILITY: GET CONTENT FROM POSITION ----------
  const getContentFromPosition = (x, y, boardArray, width) => {
    const index = (y * width) + x;
    return boardArray[index];
  };

  // ----------- UTILITY: IS OUTSIDE BOARD -----------
  const isOutsideBoard = (x, y, boardWidth, boardHeight) => {
    return x < 0 || x >= boardWidth || y < 0 || y >= boardHeight;
  };

  // ---------- FIND INITIAL POSITION ----------
  const renoIndex = boardArray.indexOf('@');
  let renoPos = getPositionFromIndex(renoIndex, boardWidth);

  // ---------- PROCESS MOVES ----------
  const moveDeltas = { 'U': [0, -1], 'D': [0, 1], 'L': [-1, 0], 'R': [1, 0] };

  for (const move of moves) {
    const [dx, dy] = moveDeltas[move];
    renoPos[0] += dx;
    renoPos[1] += dy;

    if (isOutsideBoard(renoPos[0], renoPos[1], boardWidth, boardHeight)) {
      return 'crash';
    }

    const content = getContentFromPosition(renoPos[0], renoPos[1], boardArray, boardWidth);
    
    if (content === '#') return 'crash';
    if (content === '*') return 'success';
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