// CoderBytes - "First Factorial"
// Have the function FirstFactorial(num) take the num parameter being passed and
// return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)).
// For the test cases, the range will be between 1 and 18 and the input
// will always be an integer.

function firstFactorial(number) {
  let factorial = 1;
  for (let i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}

firstFactorial(4)
