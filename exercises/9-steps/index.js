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

function steps(n, step = 1) {
  if (step === n) {
    return;
  }

  steps(n - 1);
}

steps(10);

module.exports = steps;

/*
const step = (hash, space) => {
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
    console.log(step(i, j));
  }
}
*/

/*
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}
*/
