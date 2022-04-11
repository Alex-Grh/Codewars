/*
Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)
*/
function sumStr(a,b) {
   return ((+a) + (+b)).toString();
}
sumStr("4", "5"); // "9"
sumStr("34", "5"); // "39"
sumStr("", ""); // "0"
sumStr("2", ""); // "2"
sumStr("-5", "3"); // "-2"

/* Вариант 2
function sumStr(a,b) {
  const num1 = Number(a);
  const num2 = Number(b);
  return String(num1 + num2)
}
sumStr("4", "5"); // "9"
sumStr("34", "5"); // "39"
sumStr("", ""); // "0"
sumStr("2", ""); // "2"
sumStr("-5", "3"); // "-2"
*/
