/**
 * @param {string} code - The code to decipher
 * @returns {string} The deciphered PIN
 */
function decodeSantaPin(code) {
  if(!code) return null;
  const data = Array.from(code);

  const result = [];
  let current = 0;

  data.forEach(element => {
    if (element === "[") { current == 0; }
    if (element === "]") { result.push(current); }
    if (element === "1" || element === "2" || element === "3" ||
        element === "4" || element === "5" || element === "6" ||
        element === "7" || element === "8" || element === "9" ||
        element === "0") { current = parseInt(element); }
    if (element === "+") { 
        current++;
        if (current >= 10) current = current % 10;
    }
    if (element === "-") {
        current--;
        if (current <= -1) current = 9;
    }
});
    if (result.length === 4) {
        return result.join("");
    } else {
        return null;
    }
}

console.log(decodeSantaPin('[1++][2-][3+][<]'))
// "3144"

console.log(decodeSantaPin('[9+][0-][4][<]'))
// "0944"

console.log(decodeSantaPin('[1+][2-]'))
// null (solo 2 dígitos)