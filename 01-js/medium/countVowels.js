/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  str.split("").forEach((c) => {
    for (const v of vowels) {
      if (v == c.toLowerCase()) {
        count++;
        break;
      }
    }
  });

  return count;
}

module.exports = countVowels;
