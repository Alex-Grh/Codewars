// Complete the function which converts a binary number (given as a string) to a decimal number.
function binToDec(bin) {
   return parseInt((bin + '')
      .replace(/[^01]/gi, ''), 2);
}

/*
Вариант 2
function binToDec(bin){
   return parseInt(bin,2);
 }
 */