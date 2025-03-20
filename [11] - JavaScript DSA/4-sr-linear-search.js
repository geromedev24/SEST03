/*
  Linear Search:
  Sequentially checks each element until a match is found or the list ends.
  Time complexity: O(n)
*/

function linearSearch(array, targetValue) {
  /*
    Array: [10, 50, 30, 70, 20]
    targetValue = 20

    == 1st Iteration ==
    index = 0
    index < array.length
    0 < 5 = true
    array[0] === targetValue
    10 === 20 = false
    index = 0 + 1 = 1

    == 2nd Iteration ==
    index = 1
    index < array.length
    1 < 5 = true
    array[1] === targetValue
    50 === 20 = false
    index = 1 + 1 = 2

    == 3rd Iteration ==
    index = 2
    index < array.length
    2 < 5 = true
    array[2] === targetValue
    30 === 20 = false
    index = 2 + 1 = 3

    == 4th Iteration ==
    index = 3
    index < array.length
    3 < 5 = true
    array[3] === targetValue
    70 === 20 = false
    index = 3 + 1 = 4

    == 5th Iteration ==
    index = 4
    index < array.length
    4 < 5 = true
    array[4] === targetValue
    20 === 20 = true
    return 4
    index = 4 + 1 = 5

    == 6th Iteration ==
    index = 5
    index < array.length
    5 < 5 = false
    code will no longer be executed
    */

  for (let index = 0; index < array.length; index++) {
    if (array[index] === targetValue) {
      return index;
    }
  }
  return -1;
}

const numbers = [10, 50, 30, 70, 20];
const target = 20;

const result = linearSearch(numbers, target);
console.log("Index:", result);
