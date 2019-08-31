// Project Euler - "Largest Prime Factor"
// The prime factors of 13195 are 5, 7, 13 and 29.
//
// What is the largest prime factor of the number 600851475143 ?

function largestPrime(number) {
  // check factors
  for (let i = 0; i < number; i++) {
    if(number % i === 0) {
      // check if factor is prime
      console.log(i)
    }
  }
  return null
}

// largestPrime(600851475143); number too large
