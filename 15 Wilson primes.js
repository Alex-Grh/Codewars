/*
Wilson primes satisfy the following condition. Let P represent a prime number.

Then ((P-1)! + 1) / (P * P) should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

function amIWilson(p) {
   function amWilsonPrimes(a) {
      return a <= 1 ? 1 : a * amWilsonPrimes(a - 1);
   }
   return (amWilsonPrimes(p - 1) + 1) / (p * p) % 1 === 0;
}
