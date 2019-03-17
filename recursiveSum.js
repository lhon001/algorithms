// Recursively find the sum of all preceding numbers

function recSum(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + recSum(n - 1);
  }
}

recSum(5)
// 5 --> 15
