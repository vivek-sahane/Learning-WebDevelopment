/*
user = {
    username : "Vivek",
    price : 1000,

    welcome : function(){
        console.log(`${this.username}, welcome to website`);
        
    }
    
}

user.welcome();
user.username = "Ram"
user.welcome()
*/

const chai = function(){
    let username = "Vivek"
    console.log(this.username);
    
}
chai()


//declare arrow function
const chaha = () =>{
    let username = "Vivek"
    console.log(this.username);
    
}
chaha()


const addTwo = (num1, num2) =>{
    return num1+num2
}

console.log(addTwo(3,5));
