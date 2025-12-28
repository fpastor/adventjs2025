/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  let noVigilados = 0;

  const getPosition = (warehouse, x, y) => {
    if (x < 0 || y < 0 || x >= warehouse[0].length || y >= warehouse.length) {
      return null;
    }
    return warehouse[y].charAt(x) || null;
  }

  // Direcciones cardinales: arriba, abajo, izquierda, derecha
  const direcciones = [
    [0, -1],  // arriba
    [0, 1],   // abajo
    [-1, 0],  // izquierda
    [1, 0]    // derecha
  ];

  const tieneCamaraAdyacente = (x, y) => {
    return direcciones.some(([dx, dy]) => {
      return getPosition(warehouse, x + dx, y + dy) === '#';
    });
  }

  for (let i = 0; i < warehouse.length; i++) {
    const row = warehouse[i];
    for (let j = 0; j < row.length; j++) {
      const casilla = getPosition(warehouse, j, i);
      if (casilla === '*' && !tieneCamaraAdyacente(j, i)) {
        noVigilados++;
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