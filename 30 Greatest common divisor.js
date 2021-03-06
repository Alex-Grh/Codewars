/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.

The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/

function mygcd(x, y) {
   if ((typeof x !== 'number') || (typeof y !== 'number'))
      return false;
   x = Math.abs(x);
   y = Math.abs(y);
   while (y) {
      let t = y;
      y = x % y;
      x = t;
   }
   return x;
}