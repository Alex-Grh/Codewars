/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

function solution(str) {
   let string1 = "";
   for (let i = str.length - 1; i >= 0; i--) {
      string1 += str[i];
   }
   return string1;
}
solution('world');
