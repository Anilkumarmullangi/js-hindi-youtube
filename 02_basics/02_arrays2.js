const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","batman","flashman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[3][2]);

 const allHeros=marvelHeros.concat(dcHeros)
// console.log(allHeros);

//spread Operator

const all_new_heros=[...marvelHeros, ...dcHeros] //more used
// console.log(all_new_heros);

const anotherArray=[1,2,3,[4,5,6],7,[8,9,10,[11,12.13],14],15]
const real_another_array=anotherArray.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray("tejasree"))
console.log(Array.from("tejasree"));
console.log(Array.from({name:"tejasree"})) //interesting one

const score1=100
const score2=200
const score3=300
console.log(Array.of(score1,score2,score3));



