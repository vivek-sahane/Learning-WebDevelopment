let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toDateString());

let myCreatedDatee = new Date(2023,0,23,5,3)
console.log(myCreatedDatee.toLocaleString());

let myCreatedDateee = new Date("2023-01-23")
console.log(myCreatedDateee.toDateString());

//compare dates 
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDateee.getTime());

console.log(Math.floor(Date.now()/1000));

//access only month or year or day using function
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString(`default`, {
    weekday:"long"
})
