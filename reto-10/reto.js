/**
 * @param {string} s - The string to check
 * @returns {number} The maximum depth of the magic
 */
function maxDepth(s) {

    let intensidadMax = 0;
    let intensidad = 0;

    if (s.length % 2 !== 0) {
        return -1;
    }

    for (let item of s) {
        if (item === "[") {
            intensidad++;
            if (intensidad > intensidadMax) {
                intensidadMax = intensidad;
            }
        } else if (item === "]") {
            intensidad--;
        }
        if (intensidad < 0) {
            return -1;
        }
    }
    return intensidadMax;
}

console.log(maxDepth('[]'), "\t1");
console.log(maxDepth('[[]]'), "\t2");
console.log(maxDepth('[][]'), "\t1");
console.log(maxDepth('[[][]]'), "\t2");
console.log(maxDepth('[[[]]]'), "\t3");
console.log(maxDepth('[][[]][]'), "\t2");
console.log(maxDepth(']['), "\t-1 (cierra antes de abrir)");
console.log(maxDepth('[[['), "\t-1 (faltan cierres)");
console.log(maxDepth('[]]]'), "\t-1 (sobran cierres)");
console.log(maxDepth('[][]['), "\t-1 (queda uno sin cerrar)");
