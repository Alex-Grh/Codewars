/*
In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!
*/

const sumDigPow = (a, b) =>
   new Array(b - a).fill(0)
      .map((_, i) => a + i)
      .filter(x =>
         `${x}`.split('')
            .reduce((result, n, i) => result + n ** (i + 1), 0)
         === x
      );


      // function sumDigPow(a, b) {
      //    var ans = [];
      //    while(a <= b){
      //      if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      //        ans.push(a);
      //      a++;
      //    }
      //    return ans;
      //  }


      // function sumDigPow(a, b) {
      //    var arr = [];
      //    for (var i = a; i <= b; i++) {
      //      var sum = 0;
      //      for (var j = 0; j <= String(i).length; j++) {
      //        sum += Math.pow(parseInt(String(i)[j]), j+1);  
      //        if (sum == i) arr.push(i);
      //      }
      //    }
      //    return arr;
      //  }