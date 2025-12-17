/**
 * @param {{ hand: 'L' | 'R', color: string }[]} gloves
 * @returns {string[]} Colors of matched pairs
 */
function matchGloves(gloves) {
    let result = [];
    gloves.reduce((acc, glove) => {
        if (!acc[glove.color]) acc[glove.color] = { l: 0, r: 0 }
        if (glove.hand === 'L') acc[glove.color].l++;
        if (glove.hand === 'R') acc[glove.color].r++;
        if (acc[glove.color].l >= 1 && acc[glove.color].r >= 1) {
            acc[glove.color].l--;
            acc[glove.color].r--;
            result.push(glove.color);            
        }
        return acc
    }, {});
    return result;
}

const gloves = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' },
  { hand: 'L', color: 'green' }
]

console.log(matchGloves(gloves));
// ["red", "green"]

const gloves2 = [
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'L', color: 'gold' },
  { hand: 'R', color: 'gold' }
]

console.log(matchGloves(gloves2));
// ["gold", "gold"]

const gloves3 = [
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'green' },
  { hand: 'L', color: 'blue' }
]

console.log(matchGloves(gloves3));
// []

const gloves4 = [
  { hand: 'L', color: 'green' },
  { hand: 'L', color: 'red' },
  { hand: 'R', color: 'red' },
  { hand: 'R', color: 'green' }
]

console.log(matchGloves(gloves4));
// ['red', 'green']