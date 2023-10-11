// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const hashTags = (hash, space) => {
  let result = "";

  while (hash > 0) {
    result += "#";
    hash--;
  }

  while (space > 0) {
    result += " ";
    space--;
  }

  return result;
};

function steps(n) {
  for (let i = 1, j = n - 1; i <= n; i++, j--) {
    console.log(hashTags(i, j));
  }
}

module.exports = steps;
