/*
  Bubblesort Once

  Task
  Given an array of integers, your function should return a new array 
  equivalent to performing exactly 1 complete pass on the original array. 
  Your function should be pure, i.e. it should not mutate the input array.
*/

const Test = require('@codewars/test-compat');

describe("bubblesortOnce", function () {
  it("should work for an example assertion", function () {
    Test.assertDeepEquals(bubblesortOnce([9, 7, 5, 3, 1, 2, 4, 6, 8]), [7, 5, 3, 1, 2, 4, 6, 8, 9]);
  });
});


function bubblesortOnce(a) {
  // TODO
  let result = a.slice();
  for(let i = 0; i < result.length; i++){
      if(result[i] > result[i + 1]){
        let temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
      }
  }
  return result;
}
