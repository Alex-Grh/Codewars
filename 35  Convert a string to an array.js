/*
Write a function to split a string and convert it into an array of words.

Examples (Input -> Output):
* "Robin Singh" ==> ["Robin", "Singh"]

* "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favor
*/
function stringToArray(string) {
   let a = /\s* \s*/;
   return string.split(a);
}

// Вариант 2

function stringToArray(string) {
   return string.split(' ');
}