// A pangram is a sentence that contains every single letter of the alphabet
// at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram,
// because it uses the letters A-Z at least once (case is irrelevant).
//
// Given a string, detect whether or not it is a pangram.
// Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(str) {
  let single = str.split(' ').join('')
  console.log(single)
  let obj = {}

  for(let i of str){
    if(obj[i] === undefined){
      obj[i] = 1
    } else {
      obj[i] += 1
    }
  }

  return (obj.length === 26) ? true : false
}

isPangram("helloWorld")
