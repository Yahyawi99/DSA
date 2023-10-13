// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = "") {
  if (n === row) {
    return;
  }

  if (2 * n - 1 === level.length) {
    console.log(level);
    pyramid(n, row + 1);
    return;
  }

  const midpiont = Math.floor((2 * n - 1) / 2);

  if (midpiont - row <= level.length && midpiont + row >= level.length) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level);
}

pyramid(5);

module.exports = pyramid;

/*
 const midpiont = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = "";
    for (let column = 0; column < n * 2 - 1; column++) {
      if (midpiont - row <= column && midpiont + row >= column) {
        level += "#";
      } else {
        level += " ";
      }
    }
    console.log(level);
  }
*/
