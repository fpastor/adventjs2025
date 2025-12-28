/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let noVigilados = 0;

  getPosition = (warehouse, x, y) => {
    if (x < 0 || y < 0 || x >= warehouse[0].length || y >= warehouse.length) return null;
    const row = warehouse[y];
    const content = row.charAt(x);
    return content ? content : null;
  }

  for (let i = 0; i < warehouse.length; i++) {
    row = warehouse[i];
    for (let j = 0; j < row.length; j++) {
      const casilla = getPosition(warehouse, j, i);
      if (casilla === '*' && (
        getPosition(warehouse, j - 1, i) !== '#' &&
        getPosition(warehouse, j + 1, i) !== '#' &&
        getPosition(warehouse, j, i - 1) !== '#' &&
        getPosition(warehouse, j, i + 1) !== '#'
      )
      ) {
        noVigilados++
        //console.log("no vigilados", noVigilados);
      }
    }
  }
  return noVigilados;
}

const result1 = findUnsafeGifts([
  '.*.',
  '*#*',
  '.*.'
]) // ➞ 0

console.log(result1, "0");
// Todos los regalos están junto a una cámara

const result2 = findUnsafeGifts([
  '...',
  '.*.',
  '...'
]) // ➞ 1

console.log(result2, "1");
// Este regalo no tiene cámaras alrededor

const result3 = findUnsafeGifts([
  '*.*',
  '...',
  '*#*'
]) // ➞ 2

console.log(result3, "2");
// Los regalos en las esquinas superiores no tienen cámaras alrededor

const result4 = findUnsafeGifts([
  '.....',
  '.*.*.',
  '..#..',
  '.*.*.',
  '.....'
]) // ➞ 4

console.log(result4, "4");
// Los cuatro regalos no tienen cámaras, porque están en diagonal a la cámara
