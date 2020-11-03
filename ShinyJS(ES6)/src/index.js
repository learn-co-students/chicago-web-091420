// destructuring

// array
let numbers = [10,20,40,80]
let [n1,n2,n3,n4] = numbers

let [i1,i2,,i4] = numbers


// object
const spaceship = {
    pilot: 'elon musk',
    guidance: 'marc zucc'
}
/* from the object spaceship, please pull out the VALUES stored at pilot and guidance */
const { pilot, guidance } = spaceship

console.log(pilot) // 'elon musk'
console.log(guidance) // 'marc zucc'

const {pilot:puppy} = spaceship

// key value assignment shortcut
const pizza = 'meat-lover'
const restaurant = 'New York Pizza™️'

const pizzaObj = {
  pizza: pizza,
  restaurant: restaurant
}


// ES6 Spread Operator
// Array
let a = [1,2,3]
let b = [4,5,6]

let nums = [...a, ...b] //[1,2,3,4,5,6]
// add elements 

let newArray = [...nums,8,9]

// Objects

let obj1 = {name: "student", location:"NYC"}
let obj2 = {school: "flatironschool"}

let student = {...obj1, ...obj2} //{name: "student", location: "NYC", school: "flatironschool"}

// How to change single key inside an object?
student.location = "Houston"

// OR
student = {...student, location: "Houston"} 

// --------------------------------------------------------

let obj = { pizza: "cheese", topping: "pineapple" }

let obj2 = {pizza_name: "meat-lover"}

newObj = {...obj, ...obj2}

newObj.topping = "Chicken"

newObj = {...newObj, topping: "Shrimp"}

newObj = {...newObj, topping: "Olives", sauce: "Tomato"}

newObj = {...newObj, topping: ["Olives"], sauce: "Tomato"}

newObj = {...newObj, topping: [...newObj.topping, "Onions"], sauce: "Tomato"}

delete newObj.topping

function sum(x, y, z) {
    return x + y + z;  
}

const n = [1, 2, 3];

console.log(sum(...n));
// expected output: 6

// forms of arrow functions

const implicitReturn = () => 'hi'
const explicitReturn = () => {
  return 'hi'
}

// Declarative versus imperative

// imperative
function sum(a){
    return function(b){
     return a +b 
    }
 }

 sum(10)(20)
//  30

// Declarative
add = (a) => (b) => a + b
add(10)(20)
//  30


const addition = (a,b) => {return a+b}

const summ = function(a,b){return a+b}
