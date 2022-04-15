/*
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
   if (n > 0)
     return s.repeat(n);
   else
     return "";
 }
 repeatStr(6, "I");
 repeatStr(5, "Hello");

 /*
function repeatStr (n, s) {
  return s.repeat(n);
}
 */
