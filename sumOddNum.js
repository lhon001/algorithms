// Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// 
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

function rowSumOddNumbers(n) {
  let count = 1
  let array = []

  for (let i = 1; i <= n; i++){
    for (let a = i; a <= n; a++){
      array.push(count)
      count = count + 2
    }
  }

  let result = 0

  for (let i = 1; i <= n; i++){
    result += array[array.length - i]
  }
  return result
}
