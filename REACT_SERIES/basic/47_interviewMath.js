//console.log(Math.PI);

const descripter = Object.getOwnPropertyDescriptor(Math,'PI')
console.log(descripter);

const chai = {
    name: 'ginger chai',
    price: 250,
    available: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

for( let[key,value] of Object.entries(chai)) {

    if(typeof value !== 'function'){            // agar value koi function nhi hein to
        console.log(`${key} : ${value}`);
    }
    
}