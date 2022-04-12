/*
Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
  or `name` = ""        => return "Hello, World!"
*/

function hello(name) {
   return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World" }!`;
   }
   
   /*
function hello(name){
  if (name){
    return "Hello, " + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  } else {
    return "Hello, World!";
  }
}
   */

/*
function hello(name) {
  return (name === '' || name === undefined) ? 'Hello, World!' : `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().substr(1)}!`;
}
*/

/*
function hello(name) {
  if (typeof name === 'undefined' || name.length <= 0) {
    name = 'World'
  } else {
    const head = name.toLowerCase()[0].toUpperCase()
    const tail = name.toLowerCase().slice(1, name.length)
    
    name = `${head}${tail}`
  }
  
  return `Hello, ${name}!`;
}
*/

/*
function hello(name) {
  return `Hello, ${capitalize(name||'World')}!`;
}

function capitalize(str) {
  if (typeof str !== 'string') throw 'Input must be a string';
  
  const first = str[0];
  const rest = str.slice(1);
  
  return first.toUpperCase() + rest.toLowerCase();
}
*/

/*
function hello(name) {
  if (name === undefined || name === '') {
    return 'Hello, World!';
  } else {
    return 'Hello, ' + name.substring(0,1).toUpperCase() + name.substring(1).toLowerCase() + '!';
  }
}
*/

/*
function hello(name) {
  function toNameCase(name){
    return name[0].toUpperCase()+name.toLowerCase().slice(1)
  }
  return name?`Hello, ${toNameCase(name)}!`:"Hello, World!";
}
*/

/*
function hello(name) {
  if (typeof name === "undefined" || name.length === 0) {
    return `Hello, World!`;}
  else {
    name = name.toLowerCase();
    let n = name[0].toUpperCase()
    for(let i = 1; i < name.length; i++){
      n += name[i]
    }
    return `Hello, ${n}!`;
  }
}
*/

/*
function hello(name) {  
  if (name == null || name.length == 0){
    return "Hello, World!";
  }
  else{       
    return `Hello, ${name.charAt(0).toUpperCase() + name.toLowerCase().slice(1)}!`;
  }
}
*/

/*
function hello(name) {
  
  if(name == "" || name == undefined || name == null){
    return 'Hello, World!';
  }
  else{
    return  'Hello, ' + name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) + '!';
  }
}
*/

/*
function hello(name='world') {
  if (name === ''){
    name = 'world';
  }
  const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return 'Hello, ' + nameCapitalized + '!';
}
*/
