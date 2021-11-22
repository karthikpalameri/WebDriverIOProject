console.log("hello world")

//var, let , const  

let a=4
console.log(typeof a)

let string = "someString"
console.log(typeof string)

let bo= true
console.log(typeof bo)
console.log( bo)
console.log( !bo)



//let : we cannot redeclare a variable using let keyword but possible using var
a=4+1 // let:we can reassign using let and it is block scoped 
console.log(a)

var z = 5 //var : is function scoped and can be redeclared and reassigned ; 
console.log( z)

var x //var: by default is assingned undefined 
console.log(x)

const con = 1 // const : is block scoped; cannot be updated/resassigned or redeclared
console.log(con)
