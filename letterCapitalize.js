// CoderBytes = "Letter Capitalize"

// Have the function LetterCapitalize(str) take the str parameter being passed and
// capitalize the first letter of each word. Words will be separated by only one space.

function letterCapitalize(sentence) {
  let wordArray = sentence.split(' ')
  for (let i = 0; i < wordArray.length; i++) {
    wordArray[i] = wordArray[i].replace(wordArray[i][0], wordArray[i][0].toUpperCase())
  }
  return wordArray.join(' ')
}
