// CodeWars 6 kyu
// The main idea is to count all the occuring characters(UTF-8) in string.
// If you have string like this aba then the result should be { 'a': 2, 'b': 1 }
//
// What if the string is empty ? Then the result should be empty object literal { }

function count (string) {
  let letterCount = {}
  for (let letter of string) {
    if (letterCount[letter] === undefined) {
      letterCount[letter] = 1
    } else {
      letterCount[letter] += 1
    }
  }
  return letterCount;
}

// function countV2 (string) {
//   let letterCount = {}
//   string.split('').forEach((letter) => {
//     letterCount[letter] ? letterCount[letter]+= 1 : letterCount[letter] = 1
//   })
// }
