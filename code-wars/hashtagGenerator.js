/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
*/

// My solution
function generateHashtag(str) {
  const strArr = str
    .trim()
    .split(" ")
    .filter(word => word); // Removes empty strings if multiple whitespaces in str
  if (strArr.join("").length + 1 > 140 || str === "" || strArr.length === 0) {
    return false;
  } else {
    return (
      "#" +
      strArr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("")
    );
  }
}
