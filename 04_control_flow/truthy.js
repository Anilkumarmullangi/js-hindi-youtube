// truthy values

const userEmail=[]

// if(userEmail){
//     console.log("Got user Email");
// }
// else {
//     console.log("Don't have any user Email");  
// }

//falsy values

// false, 0 ,-0 , "", undefined, null, NaN, BigInt 0n

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const  emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");   
}

//Nullish coalescing operator(??) : null undefined

let val1;
// val1= 5 ?? 10
// val1 = null ?? 10 
// val1= undefined ?? 15
// val1=null ?? 20 ?? 10
console.log(val1);

//terniary operator
// condition ? true : false

const teaPrice=100
teaPrice <=80 ? console.log("less than the 80 rupees") : console.log("greater than 80 rupees");


