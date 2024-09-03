const users={
    username:"hitesh",
    loginCount:8,
    signedIn:true,

    getUserDetails :function(){
        console.log(`got user details`);
        console.log(`username:${this.username}`);
        console.log(this);
        
    }
}
console.log(user.username);
console.log(user.getUserDetails);
console.log(this);

function user(username,loginCount,isLoggedIn) {
    this.username=username;
    this.isLoggedIn=isLoggedIn;
    this.loginCount=loginCount;

    this.greeting=function(){
        console.log(`welcome${username}`);
        
    }
    return this;
}
const userOne=new user("hitesh",12,true)
const userTwo=new user("navitha",9,false)
console.log( userOne);
console.log( usertwo);
console.log(userOne.constructor);




