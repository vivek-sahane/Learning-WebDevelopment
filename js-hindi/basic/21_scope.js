let a = 100
const b = 300
var c = 400

if(true) {
    let a=10
    const b=20
    var c=30
}

//console.log(c);   //for var it prints the value in the scope for others not


function one(){
    let name= "Vivek"
    function two(){
        let web = "hello"
        console.log(name);
    }
    two()
    //console.log(web);
    
}

one()




const addTwo = function(num){
    return num+2
}

console.log(addTwo(5));
