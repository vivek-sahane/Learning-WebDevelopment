/*

for(let idx = 0; idx < arr.length; idx++) {
    const element = arr[idx];
}

*/

const arr = [1,2,3,4,5]

for( const num of arr) {
    console.log(num);   
}

const greetings = "Hello World"
for(const greet of greetings) {
    console.log(greet);   
}

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA',"United states of America")
map.set('Fr',"France")

//console.log(map);

for( const [key,value] of map) {
    console.log(key, ':-',value);   
}

const myObject = {
    js : 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift'
}

for(const key in myObject) {
    console.log(key);
    console.log(myObject[key]);
    
}


const coding = ["js", "ruby", "java", "python"]

coding.forEach(function (item){
    console.log(item);
    
})

coding.forEach((item, index, arr) => {
    console.log(item,index,arr);
    
}) 