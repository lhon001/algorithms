// Different methods to solve exponents

function slowExpt(b, n) {
  if (n === 1) {
    return b;
  } else {
    return b * expo(b, (n - 1));
  }
}

function fastExpt(b, n) {
  if (n % 2 === 0) {
    return expt(b, (n/2)) * expt(b, (n/2));
  } else if (n === 1) {
    return b;
  } else {
    return b * expt(b, (n - 1));
  }
}

function iterExpt(b, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = result * b;
  }
  return result;
}
// iterExpt(2, 4)

function euclidsAlgo(a, b) {
  if (b === 0) {
    return a;
  } else {
    return euclidsAlgo(b, (a % b));
  }
}

euclidsAlgo(206, 40)
