// Given a string str, reverse it omitting all non-alphabetic characters.
function reverseLetter(str) {
    let result = [];
    let abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i of str) {
        if (abc.includes(i.toLowerCase())) {
          result.unshift(i);
        }
    }
    return result.join('');
}
