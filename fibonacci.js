// write a function that takes a number (n) as a parameter and returns the nth
// fibonacci number

// non recursive solution
function fib(n) {
  if (n === 0) {
    return -1;
  } else if ((n === 1)||(n === 2)) {
    return 1;
  }

  let num = 1
  let result = 1;
  for (let i = 1; i <= n; i++) {
    let temp = result;
    result += num;
    let num = temp
  }
  return result;
}

// 1,1,2,3,5,8,13
