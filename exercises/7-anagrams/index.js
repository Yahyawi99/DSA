// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const createStringObject = (string) => {
  const object = {};
  for (let char of string) {
    if (!object.hasOwnProperty(char)) {
      object[char] = 0;
    }
    object[char]++;
  }

  return object;
};

function anagrams(stringA, stringB) {
  const regex = /[^\w]/g;

  const NewStringA = stringA.replace(regex, "").toLowerCase();
  const NewStringB = stringB.replace(regex, "").toLowerCase();

  if (NewStringA.length !== NewStringA.length) {
    return false;
  } else {
    let ObjectA = createStringObject(NewStringA);
    let ObjectB = createStringObject(NewStringB);

    let isAnagram = true;

    for (let char in ObjectA) {
      for (let char2 in ObjectB) {
        if (ObjectA[char] !== ObjectB[char]) {
          isAnagram = false;
        }
      }
    }

    return isAnagram;
  }
}

// anagrams("RAIL! SAFETY!", "fairy tales");
// anagrams("rail safety", "fairy tales");
anagrams("Hi there", "Bye there");

module.exports = anagrams;
