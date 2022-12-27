/*
Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
   let out = new Set(x),
      out1 = false;

   for (let char of out)
      if (x.match(new RegExp(char, 'gi')).length % 2)
         if (out1)
            return false;
         else
            out1 = true;
   return true;
}