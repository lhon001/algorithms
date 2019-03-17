// Newtons Method and Square Root Approximations 
function newtonMethod (num, guess) {
  for (let i = 0; i < 30; i++) {
    let quotient = num / guess;
    let approx = ((quotient + guess) / num);
    guess = approx;
    console.log(approx)
    if (parseFloat(approx.toFixed(5)) === parseFloat(Math.sqrt(num).toFixed(5))) {
      console.log("Match!");
      break
    }
  }
}

function sqrt(num, guess) {
  while (parseFloat(Math.sqrt(num).toFixed(10)) != guess) {
    let quotient = num / guess;
    let approx = ((quotient + guess) / num);
    guess = approx;
    console.log(approx)

    if (parseFloat(approx.toFixed(10)) === parseFloat(Math.sqrt(num).toFixed(10))) {
      console.log("Match!");
      break
    }
  }
}

sqrt(2, 1)
