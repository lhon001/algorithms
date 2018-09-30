
// Find the majority element (element that appears more than n/2 times)
// Finding the majority element in an array involves finding an element that
// appears strictly more than n/2 times where n is the size of the array.
// For example, in the array [1, 4, 5, 5, 5, 5] the element 5 appears 4 times
// and n/2 = 6/2 = 3, so the element 5 is the majority element.
// If on the other hand the array was [1, 4, 4, 5, 5] then the element 5 is not
// the majority element. There actually is no majority element because no
// element appears more than n/2 = 5/2 = 2 times.
// To solve this challenge we can create a nested loop and in the outer loop go
// through each element, and then in the inner loop check all the other elements
// in the array and count the occurences of the current element.
// This would make the code very compact but the algorithm would run in O(n2)
// time because of the nested loop checking each of the n elements, and then
// in the inner loop checking them again: n * n = n2.
// There is a faster way to solve this problem and that is to use
// the Majority Vote Algorithm (http://bit.ly/1KVeJTk).
// It works the following way:
// 1. Start with a candidate element that is empty and a count that is set to 0.
// 2. For each element in the array we check it against the candidate element.
// • If the candidate element is blank or the count is equal to 0, set the
// current element to be the candidate element and set the count to 1.
// • If the current element equals the candidate element, increase
// the count by 1.
// • If the current element does not equal the candidate element,
// decrease the count by 1.
// This algorithm will run in linear time, O(n), because it only loops through
// the whole array a single time maintaining two variables as it passes through.

function func(arr){
  let num = Math.floor(arr.length/2)
  let obj = {}

  for(let i = 0; i < arr.length; i++){
    if(obj[arr[i]] === undefined){
      obj[arr[i]] = 1
    } else {
      obj[arr[i]] += 1
    }

    if(obj[arr[i]] > num){
      console.log(obj)
      console.log(num)
      return arr[i]
    }
  }

  console.log(obj)
  console.log(num)
  return null
}

arr = [1,2,3,2]

func(arr)
