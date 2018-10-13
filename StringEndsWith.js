// 6 kyu
// Complete the solution so that it returns true if the first argument(string)
// passed in ends with the 2nd argument (also a string).

function solution(str, ending){
  return ending === str.substring(str.length - ending.length)
}

// function solution(str, ending){
//   let strArray = str.split('').reverse()
//   let endingArray = ending.split('').reverse()
//   for (let i = 0; i < endingArray.length; i++) {
//     if (endingArray[i] !== strArray[i]) {
//       return false
//     }
//   }
//   return true
// }
