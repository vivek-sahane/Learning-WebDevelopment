const marvel = ["Spiderman","thor"]
const dc = ["batmam","superman"]

marvel.push(dc)
console.log(marvel);

marvel.concat(dc)
console.log(marvel);

//spread operator
const marvell = ["Spiderman","thor"]
const spread = [...marvell,  ...dc]
console.log(spread);

//print all in one array
const anotherArr = [1,2,3,[4,5,6,[7]],9]
const realArr = anotherArr.flat(Infinity)
console.log(realArr);

//some points
console.log(Array.isArray("Vivek"));
console.log(Array.from("Vivek"));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));



