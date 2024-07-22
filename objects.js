//singleton
//object literals
Object.create
const mysym=symbol("key1")
const Jsusers={
    name:"hitesh",
    age:18,
    location:"jaipur",
    [mysym]:"mykey1",
    email:"hitesh@gmail.com",
    isLoggedIn:true,
    lastLogging:["monday","tuesday"]
}
console.log(Jsusers.email);
console.log(Jsusers["email"]);
console.log(Jsusers["full name"]);
console.log(Jsusers[mysym]);
Jsusers.email="hitesh@chatgpt.com"
Object.freeze(JsUser)
Jsusers.email="hitesh@micros.com"
console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello JS user");
}
console.log(JsUser.greeting());
JsUser.greeting2=function(){
    console.log(`hello JS user ${this.name}`);
}
console.log(greeting());
console.log(greeting2());

//part2
//const tinderUser=new object()
const tinderUser={}
tinderUser.id="12345"
tinderUser.name="sammy"
tinderUser.isLoggedIn=false
//console.log(tinderUser);
const regularUser={
    email:"some@gmail.com",
    fullname:{
        username:{
            firstName:"hitesh",
            lastname:"chodhary"
        }
    }
}
console.log(regularUser.fullname.username.firstName);
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
console.log(obj3);
const users=[
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },
    {
        id:1,
        email:"n@gmail.com"
    },
]
uer[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty(isLoggedIn));

//part3
const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseInstructor
const{courseInstructor:instructor}=course
console.log(courseInstructor);
console.log(instructor);
//json
// {
//     coursename:"js in hindi",
//     price:"999",
//     courseInstructor:"hitesh"
// }