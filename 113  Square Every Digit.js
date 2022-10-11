/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num) {
   let out1 = String(num)
   let out2 = ''

   for (let i = 0; i < out1.length; i++) {
      out2 += Math.pow(out1.charCodeAt(i) - 48, 2)
   }

   return parseInt(out2)
}