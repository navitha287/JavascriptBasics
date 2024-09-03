const promiseOne= new Promise(function(resolve,reject){
setTimeout(function(){
    console.log(`async task is complete`)
    resolve()
},1000);
})
promiseOne.then(function(){
    console.log(`promise consumed`);
    
})
new Promise(function(){
    setTimeout(function(){
        console.log(`async 2 task is complete`)
        resolved()
    },1000) 
}).then(function(){
    console.log(`2 promise consumed`);
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`async 3 task is complete`);
        resolve({username:"chai",email:"navi@gmail.com"})
    },1000);
})
promiseThree.then(function(user) {
    console.log(user);
    console.log(`3 promise consumed`);
})
const promiseFour=new Promise(function(resolve,reject) {
    setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"hitesh",password:"123"})
    }
    else{
        reject('error: something went wrong')
    }
}, 1000)
    
})
promiseFour.then((user)=>{
    console.log(user);
    return user.username
    
}).then((username)=> {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>"finally block is executed....")
const promiseFive=new Promise(function(resolve,reject) {
    setTimeout(function(){
    let error=true
    if(!error){
        resolve({username:"javascript",password:"123"})
    }
    else{
        reject('error: js went wrong')
    }
}, 1000)
})
async function consumepromiseFive() {
    try{
    const response =await promiseFive
    console.log(response)
    }catch(error){
        console.log(error)
    }   
}
consumepromiseFive()
async function getAllUsers() {
    try{
    const response=await fetch('https://jsonplaceholder.typicode.com/users')
    const data=await response.json()
    console.log(data);
    }catch(error){
        console.log(error);
        
    }
}
getAllUsers()
fetch(`'https://jsonplaceholder.typicode.com/users`)
.then((response)=>{
    return response.json()
})
.then((data)=> console.log(data)
)
.catch((error)=>console.log(error)
)