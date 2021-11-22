//Object is collection of properties 

let obj1 = {
    fname:"Sam",
    lname:'k',
    fullName: function() {
          return this.fname+this.lname
    }
}

console.log("*********Access object");
console.log(obj1);
console.log(obj1.fname);
console.log(obj1["lname"]);


console.log("*********Modify object");
obj1.fname="kim" //modify property
console.log(obj1);

obj1.age="20" //add property 
console.log(obj1);


delete obj1.age //delete property 
console.log(obj1);

console.log(obj1.fullName());