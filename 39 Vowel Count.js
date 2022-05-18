/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
   let vowelsCount = 0;

   for (let a = 0; a < str.length; a++) {
      switch (str[a]) {
         case "a":
         case "e":
         case "i":
         case "o":
         case "u":
            vowelsCount++;
            break;
         default:
            break;
      }
   }

   return vowelsCount;
}