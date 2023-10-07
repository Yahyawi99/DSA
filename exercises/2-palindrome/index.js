// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split("").every((char, i) => char === str[str.length - 1 - i]);
}

module.exports = palindrome;

// ***************************
// ***************************
// ***************************

// function palindrome(str) {
//   let reversedStr = str.split("").reverse().join("");

//   return reversedStr === str;
// }

// function palindrome(str) {
//   let reversedStr = "";

//   for (let char of str) {
//     reversedStr = char + reversedStr;
//   }

//   return reversedStr === str;
// }

// function palindrome(str) {
//   let reversedStr = str.split("").reduce((rev, char) => char + rev, "");

//   return reversedStr === str;
// }

// function palindrome(str) {
//   return str.split("").every((char, i) => char === str[str.length - 1 - i]);
// }
