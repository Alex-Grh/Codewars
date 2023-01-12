/*
Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata
*/

function shortcut (string) {
   let out = ['a','e','i','o','u'];
    let a = "";
    for(let i = 0; i < string.length; i++){
      if( out.indexOf(string[i]) < 0){
         a += string[i];
      }
    }
    return a;
 }