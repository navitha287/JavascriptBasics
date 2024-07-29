//if condition
const isLoggedIn=true
const temp=50
if(isLoggedIn==true){
    console.log(`hello`);
}
if (temp<=45){
    console.log(`temperature is less than 45`);
}else{
    console.log(`temperature is greater than 45`);
}
const score=200
if(score>100){
    let power="fly"
    console.log(`user power:${power}`);
}

const balance=1000
if(balance<500){
    console.log(`less than 500`);
}
else if(balance<750){
    console.log(`less than 500`);
}
else if(balance<900){
    console.log(`less than 900`);
}
else{
    console.log(`less than 1200`);
}
const userLoggedIn=true
const debitCard=true
const loggedInFromEmail=true
const loggedFromGoogle =false
if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy the course");
}
if(loggedFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

//switch case

const month=3
switch (month) {
    case 1:
        console.log("jan");
        break;
     case 2:
        console.log("feb");
        break;
     case 3:
        console.log("mar");
        break;
    case 4:
        console.log("april");
        break;
                        
    default:
        break;
}
const userEmail=[]
if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}
//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false'," ",[],{},function(){}

if(userEmail.length==0){
    console.log("array is empty");
}
const emptyobj={}
if(Object.keys(emptyobj).length==0){
    console.log("object is empty");
}
//nullish coalescing operaor(??): null undefined

let val1,val2,val3,val4;
val1 = 7 ?? 10
val2 = null ?? 10
val3 = undefined ?? 15
val4 = null ?? 7 ?? 20
console.log(val1,val2,val3,val4);

//terniary operator
//condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log(`less than 80`): console.log("more than 80");