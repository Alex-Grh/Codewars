/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

STRINGSREGULAR EXPRESSIONSFUNDAMENTALS
*/

function disemvowel(str) {
   //   let a1 = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U'];
   //   for (let i = 0; i < str.length; i++) {
   // if (str[i] == a1) {
//       str[i] = str[i + 1];    //str.replace(a1[k], ''); 
//  } else {
//      str[i] = str[i];
//  }
   //   }
     return str = str.replace(/[aAeEiIoOuU]/gi, '');
   }