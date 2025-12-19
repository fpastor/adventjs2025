/**
 * @param {string} toy - The toy to find the first unique one letter
 * @returns {string} The first unique letter in the toy
 */
function findUniqueToy(toy) {
  const toyArray = Array.from(toy);
  let current = "";
  let counter = []

  toyArray.forEach((letter) => {
    if (!counter[letter.toLowerCase()]) counter[letter.toLowerCase()] = 1;
    else counter[letter.toLowerCase()]++;
  });
  for (let i = 0; i < toyArray.length; i++) {
    if (counter[toyArray[i].toLowerCase()] === 1) { return toyArray[i]; };
  }
  return "";
}

console.log(findUniqueToy('AaBbCc'));
// ''

console.log(findUniqueToy('abcDEF'));
// // 'a'

console.log(findUniqueToy('aAaAaAF'));
// // 'F'

console.log(findUniqueToy('sTreSS'));
// // 'T'

console.log(findUniqueToy('z'));
// // 'z'
