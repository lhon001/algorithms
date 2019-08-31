// 6 kyu
// Given an array (arr) as an argument complete the function countSmileys that
// should return the total number of smiling faces.
//
// Rules for a smiling face:
// -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// -Every smiling face must have a smiling mouth that should be marked with either ) or D.
// No additional characters are allowed except for those mentioned.
// Valid smiley face examples:
// :) :D ;-D :~)
// Invalid smiley faces:
// ;( :> :} :]

function countSmileys(arr) {
  let count = 0
  for (let i = 0; i < arr.length; i++) {
    let char = arr[i].split('')
    let interCount = 0
    for (let b = 0; b <= 2; b++) {
      if((b === 0) && ((char[b] !== ":") && (char[b] !== ";"))) {
        break
      } else if((b === 1) && (char[b] !== "D" && char[b] !== ")" && char[b] !== '~' && char[b] !== '-')) {
        break
      } else if((b === 2) && (char[b] !== "D" && char[b] != ")")) {
        break
      } else {
        interCount += 1
        if((char.length === 2 && interCount === 2) || (char.length === 3 && interCount === 3)) {
          count += 1
        }
      }
    }
  }
  return count
}

// function countSmileys(arr) {
//   let smileArray = [":)", ":D", ";)", ";D", ":-)", ":-D",
//   ";-)", ";-D", ":~)", ":~D", ";~)", ";~D"]
//
//   return arr.filter((smile) => smileArray.includes(smile)).length
// }
