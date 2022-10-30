/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
  //...
}
*/

function isIsogram(str) {
   let x = str.toLowerCase();

   for (let i = 0; i < x.length; i++) {
      for (let j = i + 1; j < x.length; j++) {
         if (x[i] == x[j]) return false;
      }
   }
   return true;
}