//primitive

// 7-types:String, Number ,Boolean, Null, Symbol, undefined, Symbol, BigInt

const score=100;
const scoreValue = 100.3;
const isLoggedIn= true;
const temperature=null;

let userMail;

const id = Symbol('123')
const anotherId = Symbol('123')
//console.log(id == anotherId)

const bigNumber=23456789n 

//reference:non-primitive

//Array, Objects, Functions

const heros=["spiderMan","IronMan","Thor"]
let myObj = {
    name: "Anil Kumar",
    age: 19,
}
 
const myFunction=function(){
    console.log("hello world")
}

//console.log(typeof myObj)



//++++++++++++++++++++++++++++++++++++++++++

//stack(primitive) , Heap(non-primitive)

let myYoutubeName="HiteshChowdharydotcom"

let anotherName=myYoutubeName
 anotherName="chaiaurcode"
console.log(anotherName)
console.log(myYoutubeName)

let userOne ={
    email : "user@google.com",
    upi : "user1@ybl"
}

let userTwo = userOne;

userTwo.email = "anilkumar@gmail.com"

console.log(userOne.email);
console.log(userTwo.email )