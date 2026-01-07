
if(true){
    let a =10;
    const b=20;
    var c=30;
}
let a=200
const b=300
if(true){
    let a=10
    const b=20
    // console.log("inner: "+a);
    
}
// console.log( a);
// console.log( b);
// console.log( c); // this only executes none of the other can

 
function one(){
    const username="anil kumar"
    function two(){
        const website="youtube"
        console.log(username);
        
    }
    // console.log(website)
    // two();
}
// one()

if(true){
    const username="hitesh";
    if(username === "hitesh"){
        const website=" youtube"
        // console.log(username+website);
        }
        // console.log(website);
    }
    // console.log(username);
    

    /// +++++++++++++Interesting+++++++++++

function addOne(num){
    return num+1
}
addOne(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)
