
module.exports = class Person {
    //class variables
    location = "ind"

    //getter method / just a property 
    get age() {
        return 20
    }

    //constructor
    constructor(fname, lname) {
        this.fname = fname
        this.lname = lname
    }

    //methonds
    fullName() {
        return this.fname + this.lname
    }
}

// let person1 = new Person("sam", "l")
// console.log(person1);
// console.log(person1.age); //dont use () for getters they are just property 
// console.log(person1.fullName());
// console.log(person1.location)


// let person2 = new Person("kim", "o")
// console.log(person2);
// console.log(person2.age); //dont use () for getters they are just property 
// console.log(person2.fullName());
// console.log(person2.location)
