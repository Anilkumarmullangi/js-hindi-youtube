// singleton
//object.create
//object literals

const mySym =Symbol("key-1")

const jsUser={
    name : "anil",
    "Full Name0":"anil kumar",
    age :19,
    location : "piler",
    [mySym] :"myKey-1",
    email : "anil18@google.com",
    isLoggedIn :false,
    lastLoginDays :["monday","saturday"]
}

console.log(jsUser.email)
console.log(jsUser["email"]);
console.log(jsUser["Full Name0"])
console.log(jsUser[mySym]);

jsUser.email="anil@gamil.com"

 Object.freeze(jsUser)
jsUser.email="anil@anil.com"
console.log(jsUser);


jsUser.greeting=function(){
    console.log("hello JS user");
}
jsUser.greetingTwo=function(){
    console.log(`hello JS user,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

