const accountId = 12345
let accountEmail ="navita028@gmail.com"
var accountPassword = "223344"
city = "mumbai"
let accountState //undefined
console.log(accountId);
console.table([ accountId , accountEmail,accountPassword,city ])

"use strict";  //mdn,tc39.es
console.log(3+3)

let name ="navitha thangadurai"
let age =20 //2 to the power of 53
let isLogged =true

console.log(typeof 3)
console.log(typeof undefined) //undefined
console.log(typeof null) //object

let score="33"
let valueOfNumber=Number(score)
console.log(valueOfNumber);

let isLoggedIn =true
let booleanisLoggedIn =Boolean(isLoggedIn)
console.log(booleanisLoggedIn)

let Name = 33
let Number = String(Name)
console.log(Number);

let value=3
let negvalue=-(value)
console.log(negvalue);

let gameCounter=0
gameCounter++
console.log(gameCounter);

// primitive (string,number,null,boolean,undefined,symbol,BigInt)
// reference (array,objects,functions)

const id=123
const anotherId=Symbol('123')
console.log(id==anotherId);//are not same

const heros = ["shaktiman","naagraj","doga"]//array
let myObj={
    name:"navitha thangadurai",
    age: 20,
}//objects
const myFunction=function(){
    console.log("hellooo");
}
console.log(myFunction);

// stack(primitive), heap (non-primitive)

let myName="navitha thangadurai"
let anotherName=myName

anotherName="panda"
console.log( myName);
console.log( anotherName);

let userOne ={
    email:"navi@gmail.com",
    upi:qwer123,
}

let userTwo = userOne

userTwo.email="panda@gmail.com"
   console.log(userOne); 
   console.log(userTwo);

const firstName ="navitha thangadurai"
 const numberOfRepository=10
 console.log('Name'+firstName+"repos"+ numberOfRepository);  
console.log(`hello my name is ${firstName}number of repos${ numberOfRepository}`)
const gameName=new String(`navitha thangadurai`)

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));
const newString = (gameName.substring(0,4))
console.console.log(newString);
const newString1 =(gameName.slice(-8,4))
console.console.log(newString1);
const newString2 = (gameName.trim())
console.console.log(newString2);

const balance=new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(3));
const otherNumber =123.8766
console.log(otherNumber.toPrecision(4));
const hundreds= 1000000
console.log(hundreds.toLocaleString('en-IN'));

//maths
console.log(Math);
console.log(Math.abs(-5));
console.log(Math.round(85.7));
console.log(Math.min(4,5,6,7));
console.log(Math.max(4,5,6,7));
console.log(Math.random());
console.log(math.floor(Math.random()*10)+1);
const max=10
const min=20
console.log(math.floor(Math.random()*(max-min+1))+min);

//dates
let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocalString());
console.log(typeof myDate);
let myCreateDate=new Date(2023,0,23)
console.log(myCreateDate.toDateString());
let myCreateDate1= new Date("2023-01-14")
let myCreateDate2= new Date("01-14-2023")
console.log(myCreateDate2.toLocaleString());
let myTimeStamp=Date.now()
console.log( myTimeStamp);
console.log(myCreateDate2.getTime());
console.log(Math.floor(Date.now()/1000));
let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth());
console.log(newDate.getDay());
newDate.toLocalString('default',{
    weekday:"long",
})

