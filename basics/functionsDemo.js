//classic function
console.log("********function ");

let testlet = "w"
function fun1(a, b) {
    var testvar = "hi" //var function scope
    testlet = "hi" //let is block scope
    console.log(testlet);
    return a + b
}

// console.log(testvar);  //var is function scoped so cannot access here 

console.log(testlet);

console.log(fun1(2, 3))


//anonymouse function 
console.log("********anonymouse function ");
let fun2 = function (a, b) {
    return a + b
}

console.log(fun1(2, 3))


//anonymouse function 
console.log("********anonymouse function ");
let fun3 = (a, b) => a + b


console.log(fun3(2, 3))
