/*
Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
   let out = '';
   for (let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
         out += s[i];
      }
   }
   return out;
}