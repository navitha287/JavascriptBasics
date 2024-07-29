//for loop

for (let i = 0; i < 10; i++) {
    const element =  i;
    if(element==5){
        console.log("5 is the best number");
    }
    console.log(element);
}
//console.log(element);

for (let i = 1; i <= 10; i++) {
    console.log(`outer loop value:${i}`);
    for (let j= 1; j< 10; j++) {
        //console.log(`inner loop value ${j}and inner loop ${i}`);
        console.log(i+'*'+j+'='+i*j);
    }
}
let myArray=["flash","batman","superman"]
console.log(myArray.length);
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}
// break and continue
// for (let index = 0; index <=20; index++) {
//     if(index==5){
//         console.log(`detected 5`);
//         break
//     }
//     console.log(`value of i is${index}`);
    
// }
for (let index = 0; index <=20; index++) {
    if(index==5){
        console.log(`detected 5`);
        continue
    }
    console.log(`value of i is${index}`);
}
//while loop
let index =0
while (index<=10) {
    console.log(`value of index is ${index}`);
    index=index+2
}
let myArray1=['superman','batman','flash']
let arr=0
while (arr<myArray1.length) {
    console.log(`value is ${myArray1[arr]}`);
    arr=arr+1
}
//do while loop
score=11
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10){
    console.log(`hello`);
}
//for of
const arr1=[1,2,3,4,5]
for (const num of arr1) {
    console.log(num);
}
const greetings="hello world"
for (const greet of greetings) {
    console.log(`each char is ${greet}`);
}

//maps

const navitha=new Map();
navitha.set('IN',"india")
navitha.set('USA',"united states of america")
navitha.set('FR',"france")
navitha.set('IN',"india")
console.log(navitha);

for (const [key,value] of navitha) {
    console.log(key,':',value);
}
const obj1={
    game1:'NFS',
    game2:'spiderman',
    game3:'batman',
    game4:'superman'
}
for (const key of Object.keys(obj1)) {
    console.log(`${key} shortcut is for ${obj1[key]}`);
}

//for in loop

const lan=["js","rb","c#","cpp","java"]
for (const key in lan) {
    console.log(key);
}
//for each loop
lan.forEach(function(par) {
    console.log(par);
})
lan.forEach((item=>{
    console.log(item);
}))

function printMe(item) {
    console.log(item);
}
lan.forEach(printMe)
lan.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
const myCode=[
    {
        languageName:"javascript",
        languageFile:"js"
    },
     {
        languageName:"java",
        languageFile:"java"
    },
     {
        languageName:"python",
        languageFile:"py"
    }
   
]
myCode.forEach((item=>{
    console.log(item.languageName);
}))
const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>num>4)

const newNums=[]
myNums.forEach((num=>{
    if(num>4){
        newNums.push(num)
    }
}))
console.log(newNums);

// let userBooks=books.filter((bk)=>bk.genre==='history')
// userBooks=books.filter((bk)=>{
//     return bk.publish>= 1996 && bk.genre==="history" 
// })
// console.log(userBooks);
const myNumbers=[1,2,3,4,5,6,7,8,9,10]
const newNums1=myNumbers.map((num)=>{
    return num+10
})
const newNums2=myNumbers
                        .map((num)=>num*10)
                        .map((num)=>num+1)
                        .filter((num)=>num>=40)
console.log(newNums2);

const myNums3=[1,2,3]
const myTotal=myNums.reduce(function (acc,currval){
    console.log(`acc${acc}and cv${currval}`);
    return acc+currval
},0)
const myTotal1=myNums3.reduce((acc,curr) =>acc+curr ,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName:"java",
        price:12345
    },
    {
        itemName:"py",
        price:12345
    },
    {
        itemName:"js",
        price:12345
    },
    {
        itemName:"cpp",
        price:12345
    }
]
const priceToPay= shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(priceToPay);