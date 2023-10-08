// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let negative = false;
  if (Math.sign(n) < 0) {
    negative = true;
  }

  let numToStr = Math.abs(n) + "";
  numToStr = numToStr.split("").reverse().join("");

  return negative ? Number(-numToStr) : Number(numToStr);
}

console.log(reverseInt(15));

module.exports = reverseInt;
