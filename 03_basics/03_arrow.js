const user ={
    username: "hitesh",
    price: 999,

    welcomemessage : function(){
        console.log(`${this.username},welcome to the website`);
        // console.log(this);
    }

}
// user.welcomemessage()
// user.username="anil"
// user.welcomemessage()
// console.log(this);

// const chai=function (){
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const chai= () => {
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()

// const addTwo =(num1 , num2) => {                 --explicit way
//     return num1+num2
// }
// console.log(addTwo(5,6));

// const addTwo =(num1 , num2) =>  num1+num2        --implicit way

const addTwo =(num1 , num2) =>  ({username:"anil kumar"})
console.log(addTwo(5,6)); 
