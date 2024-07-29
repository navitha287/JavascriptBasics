function sayMyName(){

// console.log("n");
// console.log("a");
// console.log("v");
// console.log("i");
// console.log("t");
// console.log("h");
// console.log("a");
}
sayMyName()
function add(num1,num2){
    //console.log( num1+num2);
} 
add(2,3)
function sub(num1,num2){

    //let result= num1+num2
   // return result
   return num1-num2
} 
const result=sub(2,3)
//console.log("result:",result);

function login(username){
    if(username===undefined){
        //console.log("please enter your username");
        return
    }
    return`logged in ${username}`
}
//console.log(login("navitha"));

//part 2
function addPrice(...num){
    return num
}
//console.log(addPrice(200,300,400));
const user={
    username:"navitha thangadurai",
    price:199
}
function handleboth(anyobject){
    return`username is ${anyobject.username}and price is ${anyobject.price}`
}
console.log(handleboth(user));
const myArray=[200,300,400]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myArray));

//scope
let a=30
const b=20
// var c=10
// console.log(a);
// console.log(b);
// console.log(c);

if(true){
    let a=70
    const b=20
    var c=10 
   // console.log("inner:",a);
}
// console.log(a);
// console.log(b);
//  console.log(c);

 //part 2
 function one(){
    const username="navitha thangadurai"

    function two(){
        const website="youtube"
        //console.log(username);
    }
    //console.log(website) we give a error as as it is not inside the function two 
    two()
 }
 one()

 if(true){
    const username="navitha thangadurai"
    if(username==="navitha thangadurai"){
        const website="youtube"
        //console.log(username+ website); 
    }
    //console.log(website);errors
 }
 //console.log(username); errors

 function addone(num1){
    return num1+1
 }
//addone(5)
const addtwo=function(num1){
    return num1+2
}
//addtwo(5)
// console.log(addone(5));
// console.log(addtwo(5));

//arrow function
const user1={
    username:"navitha thangadurai",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
user1.welcomeMessage()
user1.username="panda"
user1.welcomeMessage()
console.log(this);//output is empty{}

function chai1(){
    let username ="navitha"
    console.log(this.username);//output is undefined
}
const chai=()=>{
    let username="hitesh"
    console.log(this.username);//undefined
    console.log(this);//output{}
}
const addtwo1=(num1,num2)=>{
    return num1+num2
}
const addtwo2=(num1,num2)=> num1+num2
const addtwo3=(num1,num2)=> (num1+num2)
const addtwo4=(num1,num2)=>({username:"navitha thangadurai"})
console.log(addtwo1(3,4));


//immediately invoked function expressions(IIFE)

(function chai2(){
    //named IIFE
    console.log(`DB CONNECTED`);
})();

((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
})('navitha')

