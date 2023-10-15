// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const regx = /[aeiou]/gi;

  return str.match(regx) ? str.match(regx).length : 0;
}

module.exports = vowels;

/*
function vowels(str) {
  let numOfVowels = 0;
  let vowelsArr = ["a", "e", "i", "o", "u"];

  str.split("").forEach((char) => {
    vowelsArr.includes(char.toLowerCase()) && numOfVowels++;
  });

  return numOfVowels;
}
*/

/*
  const regx = /[aeiou]/gi;

  return str.match(regx) ? str.match(regx).length : 0;
*/
