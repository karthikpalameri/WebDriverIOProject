let str ="hello world"
console.log(str);
console.log(`str length -> ${str.length}`)


console.log(str.slice(0,6)) //substring 

console.log(str[0]);


console.log("**********split regex trim length");
console.log(str.split(/\s+/)[0].trim().length);



console.log("**********parseInt strint to integer for addition");
let a= "10",b="20"
console.log(parseInt(a)+parseInt(b)); 


console.log("**********toString");
let c= 100
console.log(c.toString()); 
console.log(typeof c);


console.log("**********concate");
let d="abc"
let e = d+" isFun"+ " second isFun"
console.log(e);

console.log("**********indexOf");
console.log(e.indexOf("isFun",7));