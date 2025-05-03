//falsy values

// false, 0, -0, BigInt, 0n, "" , null, defined, Nan

//truthy values
// "0" , 'false' , " " , [] , {} , function() {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
    
// }


// false == 0    o/p - true
//false == ''    o/p - true
//0 == ''        o/p - true

// Nullish Caolescing Operator (??): null defined

let val1;
val1 = 5 ?? 10      // print first value
val1 = null ?? 10  //if null then print 10 like that
val1 = undefined ?? 15  // itis created only for null  undefined
console.log(val1);



// Terniary Operator

// condition ? true : false

