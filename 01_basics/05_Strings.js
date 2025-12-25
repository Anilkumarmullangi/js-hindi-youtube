const name="tejuuu"
const repoCount= 50

//console.log(name + repoCount +" value")  ->outdated 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);


const gameName=new String('teju-anil')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.toLowerCase())
console.log(gameName.charAt(0));
console.log(gameName.indexOf('u'))

const newString=gameName.substring(0,4) //we can't use the negative values in this
console.log(newString);

const anotherString =gameName.slice(-8,4) //we can use negative values in this
console.log(anotherString);

const newStringOne="        anilteju        "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://anilkumarmullangi98@gmail.com"
console.log(url.replace('98','-'));
console.log(url.includes('anil'));
console.log(gameName.split('-'));





