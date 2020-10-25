//variables
//var, let, const - don't want to use var much anymore as it is global.  
//let and const was added in latest version - nots of new funcitonality.

//let you can reassign.  const is fixed once you assign it, it can't be chnaged.
//always use const unless you know you are going to reassign the value for erros bugs, etc.

let age = 30;
//console.log(age);
age = 31;

//console.log(age);


let score = 32;

score = score *10 ;

//console.log(score);

const score2 = 43

//console.log(score2);


// data types - primitive, directly assigned to memory.  strings, numbers, boolean, null, undefined, symbol
//symbol was adde din ES6, not part of this tutorial.

const name = "Gary"

const ag2 = 30

const isCool = true

const rating = 4.6

const x = null

const y = undefined;

//let wit nothing is undefined

//console.log(typeof rating)

//console.log(typeof isCool)

//console.log(typeof f)


//concatenation

//console.log('my name is ' + name)

// new with ES6 - tepmlate strings

//console.log(`My name is  ${name} and I am ${age}`)

const varx = `My name is  ${name} and I am ${age}`

//console.log(varx)


const s = 'hello world'


//this is a property vs. method - proerty is no (), method is a function wthin it
//console.log(s.length)
//console.log(s.toUpperCase())
//console.log(s.substr(0, 5).toUpperCase())
//console.log(s.split('l'))

//arrays

const numbers = new Array(1,2,3,4,5);


//console.log(numbers)

const fruits = ['apples', 'oranges', 'pears', 1]

fruits.push(234)
fruits.push('mangos')
fruits.unshift('mybog')
fruits.pop()


//console.log(fruits)
//console.log(fruits.indexOf('pears'))

//console.log(typeof numbers)


//object literals

const person = {
    firstName: 'Gary', 
    lastName: 'Nye',
    age: 30,
    hobbies: ['biking', 'coding', 'others'],
    address: {
        street: '922 Caruthers Ave',
        state: 'TN',
        city: 'Nashville'
    }



}

//console.log(person.address, person.lastName)

//console.log(person.hobbies[1])


const {firstName, lastName, address: { city}} = person
//console.log(city)

person.email = 'garynye@gmail.com'

//console.log(person)



//arrays of ojbects

const todos = [
    {
        id: 1,
        text: 'take out trash',
        iscompleted: true
    },
    {
        id: 2,
        text: 'have meeting with melodie',
        iscompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        iscompleted: false
    }

]

//console.log(todos)

//console.log(todos[1].text)



//json data format for data, send and receive.

const todosJSON = JSON.stringify(todos)

//console.log(todosJSON)


//for loops

for (let i = 0; i < todos.length; i++){
    //console.log(todos[i])
}

let z = 0


//easy way more clean to loop through arrays
for (let t of todos) {
    //console.log(t)
}


//forEach, map, filter

todos.forEach(function(t){
    //console.log(t.text)
})


const todoText = todos.map(function(t){
    return t.text   
})

//console.log(todoText)

// what we are doing here is creating an array varabile called todoText2
// then we are filtering it by a iscomplted for true.  this would return 
// all array detials for everything that equals true.
// then we are using the map fucntion to return an array of just the text
//

const todoText2 = todos.filter(function(t){
    return t.iscompleted === true;   
}).map(function(t) {
    return t.text
})

//console.log(todoText2)

 
const u = 11


//tripple equals looks at data types.
if (u === 10){
    console.log('x is 10')
} else {
    console.log('x not equal 10')
}

//terinary operator

const e = 2;
//question is then, colon is else
const color = e > 10 ? 'red' : 'blue'

console.log(color)

switch(color){
    case 'red':
        console.log('color is red')
        break
    case 'blue':
        console.log('color is blue')
        break
    default:
        console.log('color not red or blue')
}



function addNums(numb1 = 1, numb2 =2) {
    return numb1+numb2
}


console.log(addNums(5, 5))

//convert to arrow cuntion
const addNums2 = (numb1 = 1, numb2 =2) =>   console.log(numb1+numb2)

addNums2(234,234)