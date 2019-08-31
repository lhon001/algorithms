// Recursively find the nth Fibonacci number

function recFib(n) {
  if (n === 1 || n === 2) {
    return 1;
  } else {
    return recFib(n - 1) + recFib(n - 2);
  }
}

recFib(6)
