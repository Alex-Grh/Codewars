function nameShuffler(str){
   const fullName = str.split(" ");
   return [fullName[1], fullName[0]].join(" ");
 }

 /*
 Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"
*/