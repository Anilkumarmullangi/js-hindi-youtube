//functions

// function sayMyName(){
//     console.log("a")
//     console.log("n")
//     console.log("i")
//     console.log("l")
// }
// sayMyName()

function addTwoNumbers(n1,n2){
        // let result =n1+n2;
        // return result;
        return n1+n2;
}
const result=addTwoNumbers(8,8);
console.log(result)

function loginUserMessage(username="anil"){
    // if(username == undefined){
    //     console.log("please enter a username");
        
    // }
    if(!username){
         console.log("please enter a username");
    }
    return `${username} just logged in to this`
}

// console.log( loginUserMessage("tejasree"));
// console.log( loginUserMessage());// undefined just logged in to this


function calculateCartPrice(...num1){
    return num1;
}
// console.log(calculateCartPrice(500,75,789,12,985));//[500,75,789,12,985]

Object.freeze(calculateCartPrice)
function calculateCartPrice(val1,val2,...num1){
    return num1;
}
// console.log(calculateCartPrice(500,75,789,12,985));//[ 789, 12, 985 ]

const user ={
    username:"hitesh",
    price:199,
}
function handleObject(anyObject){
    // console.log(`username is ${anyObject.username} and price is ${anyObject.price}`);
}
handleObject(user);//username is hitesh and price is 199
handleObject({
    username: "sam",
    price:399
})

const myNewArray=[200,300,500]
   function returnSecondValue(getArray){
        return getArray[1]
   }
   console.log(returnSecondValue(myNewArray));
//    console.log(returnSecondValue(mynewArray));


   