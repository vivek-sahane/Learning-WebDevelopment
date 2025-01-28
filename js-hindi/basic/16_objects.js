
//symbol construction
const mySym = Symbol("key1")

// Object literals
const JsUser = {
    name: "Vivek",
    age: 20,
    [mySym]:"key1",
    location: "Pune",
    email: "viveksahane@gmail.com",
    lastlogl : ["Mumbai","Pune"]
}

console.log(JsUser.age);
console.log(JsUser["age","email"]);

//printing symbol
console.log(JsUser[mySym]);

//changing values in objects
JsUser.email = "vivek"

//changing can be avoid using freez
//JsUser.freeze(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}

console.log(JsUser.greeting());
