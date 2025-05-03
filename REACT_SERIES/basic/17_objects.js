const tinderUser = new Object()
const tinUser = {}      //this is also one type of declaration

tinUser.name = "Vivek"
tinUser.id = 5


console.log(tinUser.name);
console.log(tinUser.id);

const regular = {
    email : "vivek",
    fullname : {
        name : "Vivek"
    }

}

console.log(regular);
console.log(regular.fullname);

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

const obj3 = Object.assign(obj1,obj2)
console.log(obj3);

const obj4 = {...obj1,...obj2}
console.log(obj4);

const username = [
    {
        id : 1,
        name:"Vivek"
    },
    {
        email:"vivek"
    }
]

console.log(Object.keys(tinUser));
console.log(Object.values(tinUser));
console.log(Object.entries(tinUser));

//check object have this property or not
console.log(tinUser.hasOwnProperty('id'));


const course = {
    coursename : "HEy",
    price:99,
    courseI : "SAHANE"
}

const {courseI : ci} = course

//console.log(courseI);
console.log(ci);



