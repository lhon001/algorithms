// Recursively add all elements in a nested array

Array.prototype.first = function() {
  return this[0];
}

Array.prototype.restOfArray = function() {
  return this.splice(1);
}

function recSum(array) {
  if ((array.length === 1) && (Array.isArray(array[0]))) {
    return recSum(array[0]);
  } else if((array.length === 1) && (!Array.isArray(array[0]))) {
    return array[0];
  } else if (!Array.isArray(array)) {
    return array;
  } else {
    return recSum(array.first()) + recSum(array.restOfArray());
  }
}

let arr = [1, [1, 1, [1, 1, [1, 1]]]];
console.log(recSum(arr));
