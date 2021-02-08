/* In this kata you will create a function that takes a list of non-negative integers and strings 
and returns a new list with the strings filtered out.
*/

function filter_list(l) {
  // Return a new array with the strings filtered out
  const output = l.filter(element => typeof element === "number");
  return output;
}

// TEST CODE
Test.assertSimilar(filter_list([1, 2, "a", "b"]), [1, 2]);
Test.assertSimilar(filter_list([1, "a", "b", 0, 15]), [1, 0, 15]);
Test.assertSimilar(filter_list([1, 2, "aasf", "1", "123", 123]), [1, 2, 123]);
Test.assertSimilar(filter_list(["a", "b", "1"]), []);
Test.assertSimilar(filter_list([1, 2, "a", "b"]), [1, 2]);
