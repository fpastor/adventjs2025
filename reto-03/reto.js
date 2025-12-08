/**
 * @param {number} size - The size of the gift
 * @param {string} symbol - The symbol to draw
 * @returns {string} The gift drawn
 */
function drawGift(size, symbol) {
    if (size < 2) return "";

    const getLine = (lineSize, lineSymbol, lineIsFull) => {
        let fill = "";
        for (let w = 1; w < lineSize - 1; w++) {
            if (lineIsFull)
                fill += lineSymbol;
            else
                fill += " ";
        }
        return lineSymbol + fill + lineSymbol;
    };

    let result = getLine(size, symbol, true) + "\n";
    for (let h = 1; h < size - 1; h++) {
        result += getLine(size, symbol, false) + "\n";
    }
    result += getLine(size, symbol, true);

    return result;
}

const g1 = drawGift(4, '*')
console.log(g1)
/*
 ****
 *  *
 *  *
 ****
 */

const g2 = drawGift(3, '#')
console.log(g2)
/*
###
# #
###
*/

const g3 = drawGift(2, '-')
console.log(g3)
/*
--
--
*/

const g4 = drawGift(1, '+')
console.log(g4)
// ""  pobre becario…