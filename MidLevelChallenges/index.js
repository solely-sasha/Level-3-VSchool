// Challenge 1: Sort Array with Preserved Index for -1 Values

function solution(arr) {
  // sort numbers that are non-negative
  //   let nonNegativeNums = arr.filter((num) => num !== -1).sort((a, b) => a - b);

  // Iterate over the original array and replace non-negative numbers
  //   let i = 0;
  //   return arr.map((num) => (num === -1 ? num : nonNegativeNums[i++]));

  let nonNegativeNums = arr.filter((num) => num !== -1).sort((a, b) => a - b);

  for (let i = 0, j = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = nonNegativeNums[j];
      j++;
    }
  }

  return arr;
}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log(solution([5, 3, 1]));
console.log(solution([-1, -1, -1, -1]));
console.log(solution([100, -1, 50, -1, 75]));

// -----------------------------------------------------------------------------------------------------------------------------------------

// Challenge 2: Count Vowels
// Write a JavaScript function called countVowels that takes a string as input and counts the number
// of vowels (a, e, i, o, u) in the string. The function should return the count.
// function countVowels(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (const letter of string) {
//     if (vowels.includes(letter.toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }

function countVowels(string) {
  // match vowels with case insensitive
  const regex = /[aeiou]/gi;
  // find all matches in the string
  const matches = string.match(regex);
  // if there's a match return the length or 0 if no match
  return matches ? matches.length : 0;
}
const input = "Hello, World!";

console.log(countVowels(input)); // Output: 3
