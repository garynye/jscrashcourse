//variables
//var, let, const - don't want to use var much anymore as it is global.  
//let and const was added in latest version - nots of new funcitonality.

//let you can reassign.  const is fixed once you assign it, it can't be chnaged.
//always use const unless you know you are going to reassign the value for erros bugs, etc.

let age = 30;
console.log(age);
age = 31;

console.log(age);


let score = 32;

score = score *10 ;

console.log(score);

const score2 = 43

console.log(score2);


// data types - primitive, directly assigned to memory.  strings, numbers, boolean, null, undefined, symbol
//symbol was adde din ES6, not part of this tutorial.

const name = "Gary"

const ag2 = 30

const isCool = true

const rating = 4.6

const x = null

const y = undefined;

//let wit nothing is undefined
let z

console.log(typeof rating)