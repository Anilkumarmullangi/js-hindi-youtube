//arrays

const myArray=[23,4,56,34,22];
const myHeros=["thor","iron-man","captain-america"]

const myArray2=[1,2,3,4]
// console.log(myArray2[3])

//arrays methods

myArray.push(6)
myArray.pop()
myArray.unshift(10)
myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(4));
// console.log(myArray.indexOf(4));

const newArray =myArray.join()
// console.log(newArray);
// console.log(typeof newArray);

//slice , splice

console.log("A",myArray); 

const myn1=myArray.slice(1,3);
console.log(myn1);
console.log("B",myArray);

const myn2=myArray.splice(1,3);

console.log(myn2);
console.log("c",myArray);
