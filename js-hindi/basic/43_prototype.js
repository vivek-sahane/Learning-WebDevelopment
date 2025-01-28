// let myName = "Vivek    "

// console.log(myName.truelength);


let myHeroes = ["thor","spiderman"]

let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.vivek = function(){
    console.log(`vivek is present in all objects`);
}

heroPower.vivek()

Array.prototype.heyVivek = function(){
    console.log(`Vivek says hello`);
}

console.log(myHeroes.heyVivek());
// console.log(heroPower.heyVivek());      // it gives error we cant defined for a global object 


// Inheritance

const teacher = {
    makeVideo : true
}

const TeachingSupport = {
    isAvailable : true
}

const TASuppour = {
    makeAssignment : 'JS assignment',
    fullTime:true,
    __proto__: TeachingSupport
}

teacher.__proto__ = User

//modern syntax 
Object.setPrototypeOf(TeachingSupport, teacher)

let anotherUserName = "Chai aur code   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`Ture length is: ${this.trim().length}`);
}

anotherUserName.trueLength()