/*
Count the number of occurrences of each character and return it as a list of tuples in order of appearance. For empty output return an empty list.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
*/
// const orderedCount = function (text) {
//    // Implement me!
//  //   let a = text.join().split(",");
//    return [];
//  }



const orderedCount = function (text) {
  return Array.from(text.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));
}

// const orderedCount = s =>
//   Array.from(s.split('').reduce((m, k) => m.set(k, m.has(k) ? m.get(k) + 1 : 1), new Map()));

/*
Вар 2
console.log('-------------');

const orderedCount = function (text) {
   text = 'abracadabra';
   
   let a = text.split("");
   let col = {};
a.forEach(s => col[s] = a.filter(i => i == s).length);

   return [col];
 }
 console.log(orderedCount());
 */


/*
Вар 3 
var orderedCount = function (text) 
{
  var arr=[];
  for (var i=0; i<text.length; ++i)
  {
     var k=0;
     for (var j=0; j<arr.length; ++j)
        if (arr[j][0]==text[i])
            k++;
      if (k==0)
      {
        for (var j=i; j<text.length; ++j)
          if (text[j]==text[i])
             k++;
          arr.push([text[i],k]);
       }
  }
  return arr;

}

*/