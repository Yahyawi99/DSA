// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev, "");
}

reverse("hello");

module.exports = reverse;

// ************************************
// ************************************
// ************************************

// function reverse(str) {
//   let reversedStr = "";

//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }

//   return reversedStr;
// }

// function reverse(str) {
//   let reversedStr = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedStr += str[i];
//   }

//   return reversedStr;
// }

// function reverse(str) {
//   return str.split("").reduce((rev, char) => char + rev, "");
// }
