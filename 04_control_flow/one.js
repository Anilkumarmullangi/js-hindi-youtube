// // if

// const isUserLoggedIn = true
// const temparature =41

// if(temparature == 41){
//     console.log(" less than 50 ")
// }
// else {
//     console.log("temparature is greater than 50 ")
// }

// // comparators ==, <= , =>, < , > , != , === ,!==

// const score =200

// if(score > 100){
//     const power = "fly"
//     console.log(`User power : ${power}`);
// }
// // console.log(`User power : ${power}`);



// const balance=1000
//  if(balance > 500) console.log("test"), console.log("test2");      not a good practice

// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 700){
//     console.log("less than 700");
// }else if(balance < 900){
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
    
// }


const userLoggedIn=true;
const debitCard =true;

const loggedInFromGoogle =false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==2){
    console.log("allowed to buy courses");
}

if( loggedInFromEmail || loggedInFromGoogle){
    console.log("user logged in");
}

