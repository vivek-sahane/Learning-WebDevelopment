class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    // get kiya to ser bhi krna pdega
    get password(){
        return this._password;
    }

    set password(value){
        this._password = value
    }
}

const vivek = new User("vivek@123","vivek123")
console.log(vivek.password);
