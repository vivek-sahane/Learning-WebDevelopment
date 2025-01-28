/*
class User{
    constructor(username, email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}


const chai = new User("chai","chai@123","123")
console.log(chai.encryptPassword());
console.log(chai.changeUsername());

*/
/*
class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is: ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("vivek","vivek@123","1234")
console.log(chai.addCourse());

const masalaChai = new User("Vivek")
masalaChai.logMe()

console.log(chai instanceof Teacher);
console.log(chai instanceof User);

*/
class User{
    constructor(username){
        this.username = username
    }

    static creatId(){       // static denied the access of method outside class even if class child is also not able to access it
        return '123'
    }
}


const vivek = new User("Vivek")
console.log(vivek.creatId())