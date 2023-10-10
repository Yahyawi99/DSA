// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function cleanString(string) {
  const regex = /[^\w]/g;
  return string.replace(regex, "").toLowerCase().split("").sort().join("");
}

function anagrams(stringA, stringB) {
  const cleanStringA = cleanString(stringA);
  const cleanStringB = cleanString(stringB);

  return cleanStringA === cleanStringB;
}

anagrams("rail safety", "fairy tales");

module.exports = anagrams;

/******************************/
/* 

function createStringObject(string) {
  const regex = /[^\w]/g;

  const cleanString = string.replace(regex, "").toLowerCase();

  const object = {};
  for (let char of cleanString) {
    if (!object.hasOwnProperty(char)) {
      object[char] = 0;
    }
    object[char]++;
  }

  return object;
}

function anagrams(stringA, stringB) {
  const ObjectA = createStringObject(stringA);
  const ObjectB = createStringObject(stringB);

  if (Object.keys(ObjectA).length !== Object.keys(ObjectB).length) {
    return false;
  }

  for (let char in ObjectA) {
    if (ObjectA[char] !== ObjectB[char]) {
      return false;
    }
  }

  return true;
}


*/
