//array
const myArr=[1,2,3,4,5,6,7]
const myHeros=["shaktiman","nagraj","spiderman"]
const myArr2=new Array(1,2,3,4,)
console.log(myArr[0]);
myArr.push(6)
myArr.push(7)
myArr.push(8)
myArr.pop(6)
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
const newArr =myArr.join()
console.log(newArr);
console.log(myArr);
console.log("A",myArr);
const myn1=myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
const myn2=myArr.splice(1,3)
console.log("c",myArr);
console.log(myn2);
const heros=["vijay","thala","superstar","vishal"]
const heroine=["anuska","hansika","trisha"]
heros.push(heroine)
console.log(heros);
console.log(heros[3][1]);
heros.concat(heroine)
const allheros=heros.concat(heroine)
console.log(allheros);
const all_new_hero=[...heros,...heroine]
console.log(all_new_hero);
const another_array=[[1,2,3,][4,5,6],19,[7,8,9]]
const w_array= another_array.flat(Infinity)
console.log(w_array);
console.log(Array.isArray("navitha thangadurai"));
console.log(Array.from("navitha thangadurai"));
console.log(Array.isArray({name:"navitha thangadurai"}));
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));