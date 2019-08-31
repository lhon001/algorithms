// CoderBytes - "Longest Word"
// Have the function LongestWord(sen) take the sen parameter being passed and
// return the largest word in the string. If there are two or more words that are
// the same length, return the first word from the string with that length.
// Ignore punctuation and assume sen will not be empty.

function longestWord(sentence) {
  let wordArray = sentence.split(' ');
  let longest = ''
  for (let i of wordArray) {
    ((longest.length) < (i.length)) && (longest = i);
  }
  return longest
}
