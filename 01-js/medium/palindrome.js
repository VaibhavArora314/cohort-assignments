/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPuntuation(x) {
  return x == '!' || x == '?' || x == '.' || x == ',';
}

function isPalindrome(str) {
  let i = 0, j = str.length-1;

  str = str.trim();

  while (i < j) {
    if (isPuntuation(str[i]) || str[i] == ' ') {
      i++;
      continue;
    }

    if (isPuntuation(str[j]) || str[j] == ' ') {
      j--;
      continue;
    }

    if (str[i].toLowerCase() != str[j].toLowerCase()) return false;
    i++;
    j--;
  }

  return true;
}

module.exports = isPalindrome;
