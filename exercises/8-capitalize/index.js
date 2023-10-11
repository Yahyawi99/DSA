// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  const strArr = str.split(" ").map((word) => {
    return word.replace(word[0], word[0].toUpperCase());
  });

  //   const newStr = [];
  //   for (let char of strArr) {
  //     char = char.replace(char[0], char[0].toUpperCase());
  //     console.log(strArr);
  //   }

  console.log(strArr);
}

capitalize("i love breakfast at bill miller bbq");

module.exports = capitalize;
