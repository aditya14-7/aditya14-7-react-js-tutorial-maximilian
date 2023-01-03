//ARROW FUNCTION
/*
function myName(name){
    console.log(name)
}

const myName = (name) => {
    console.log(name)
}
myName("Maximilian");
*/

//---------------------------------------------------------------------------

// CLASS
/*
class Person {
    constructor(){
        this.name='Aditya'
    }
    myName(){
        console.log(this.name)
    }
}

const person = new Person();
person.myName();
*/

//-------------------------------------------------------------------------------

// Extended class and inheritance
/*
class Human {
    constructor(){
        this.gender = "male"
    }
    myGender(){
        console.log(this.gender)
    }
}

class Person extends Human{
    constructor(){
        super() //to inherit the extended class properties and methods
        this.name = "Aditya"
    }
    myName(){
        console.log(this.name)
    }
}

const person = new Person()
person.myName()
person.myGender()
*/

//-------------------------------------------------------------------------------------

//ES6 Class & Function Syntax
/*
class Human{
    gender = "Male"

    myGender = () => {
        console.log(this.gender)
    }
}

class Person extends Human {
    name = "Pandey"
    myName = () => {
        console.log(this.name)
    }
}

const person = new Person()
person.myName()
person.myGender()
*/

//-------------------------------------------------------------------------------------

// SPREAD OPPERATOR on arrays
/*
//without spread operator
const arr = [1,2,3]
const newArr = [arr,4]  
console.log(newArr)
// output ->  [[1,2,3],4]

//with spread operator
const number = [1,2,3]
const newNumber  = [...number,4]
console.log(newNumber)
//output -> [1,2,3,4]
*/

// SPREAD OPPERATOR on objects
/*
const person = {
    name:"Harry",
    age:23
}
const newPerson = {
    ...person,
    city:"Delhi"
}
console.log(newPerson)
*/

//------------------------------------------------------------------

//REST OPERATOR
//used to merge the list of function arguments into an array
/*
const filter = (...args) => {
    return args.filter(element => element===6)
}
console.log(filter(1,2,3,4))
*/

//----------------------------------------------------------------------

//DESTRUCTURING
//spread takes out all elements and distributes then into the new array or object
//but Destructuring allows to pull out single element or property and store them into a variable

//Destructuring an Array
/*
const number = [1,2,3]
let num1, num2, num3
// [num1,num2] = number 
//LHS of above statement is how we destructure an array
// console.log(num1,num2)
//output -> 1 2
[num1, ,num3] = number
console.log(num1,num3)
//output -> 1 3
*/

//Destructuring an Object
/*
 const person = {
    name1:"Aditya",
    age:24,
    address:{
        city:"Lucknow",
        state:"UP"
    },
    marks:[23,44,56]
 }
 const {name1, address, marks} = person
console.log(name1)
//output -> Aditya
console.log(address)
//output -> {city:'Lucknow', state:'UP'}
console.log(marks)
//output -> [23,44,56]
*/

//------------------------------------------------------------------------------------

//Reference & Primitive types
/*Primitives are numbers, strings & boolean values when copied in another variable
it really creates a copy
Reference are objects and arrays, when copied in another variable, 
it takes a reference pointer of the original variable and not really copies it in another variable

//------------------------------------------------------------------------

//Array Methods
/*
// array.map((arg)=>{return code})

const num = [1,2,3]
const doubleNum = num.map((n)=>{
    return n*2
})
console.log(num)
//output -> [1,2,3]
console.log(doubleNum)
//output -> [2,4,6]
*/

//------------------------------------------------------------------------------






