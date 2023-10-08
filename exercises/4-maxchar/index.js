// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const strObject = {};
  for (char of str) {
    if (!strObject.hasOwnProperty(char)) {
      strObject[char] = 0;
    }

    strObject[char]++;
  }

  let maxVal = 0;
  let maxChar = "";

  for (char in strObject) {
    if (strObject[char] > maxVal) {
      maxVal = strObject[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
