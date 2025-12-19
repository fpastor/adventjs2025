/** @param {number} height - Height of the tree
 *  @param {string} ornament - Character to use as ornament
 *  @param {number} frequency - How often ornaments appear
 *  @returns {string} The decorated tree
 */
function drawTree(height, ornament, frequency) {
    let printCount = 1;
    let ornamentCount = 1;
    let charsToDraw = 1;
    let result = "";

    const spacer = (repeat) => " ".repeat(repeat);

    for (let i = height; i > 0; i--) {
        result += spacer(i - 1);
        for (let j = 1; j <= charsToDraw; j++) {
            if (printCount === ornamentCount * frequency) {
                result += ornament;
                ornamentCount++;
            } else {
                result += "*";
            }
            printCount++;
        }
        charsToDraw += 2;
        result += "\n";
    }
    result += spacer(height - 1);
    result += "#";
    return result;
}


console.log(drawTree(5, 'o', 2));
console.log(drawTree(3, '@', 3));
console.log(drawTree(4, '+', 1));
