//ARRAYS
let arr = [10, 20, 30, 40]
console.log(arr)

//basic array operations
console.log(arr[0]) //retrive
arr[0] = 12 //assign 
console.log(arr)
console.log(arr.length)//length
arr.push(100)//add at end 
console.log(arr)
arr.pop()//remove at end 
console.log(arr)
arr.unshift(1) //add at beginning 
console.log(arr)

console.log(arr.indexOf(20))  //get the index position
console.log(arr.includes(30)) //check if array contains item

arr = [1, 2, 3, 4, 5]
console.log(arr.slice(1, 3)) //get part of array 

let sum = 0 
for (let i = 0; i < arr.length; i++){
    sum = sum+arr[i]
    console.log(sum)
}

//advance array opertations 

console.log("*********reduce")
//reduce, map , filter 

total = arr.reduce((tempSum,val)=>tempSum+val,0)
console.log(total)


console.log("*********filter")
let tempFilterResult = arr.filter(value => value%2==0)
console.log(tempFilterResult);


console.log("*********filter")
console.log(arr);
let tempMapRes = arr.map(value=> value*3)
console.log(tempMapRes);


//chain advance operations 
console.log("*********Chain")
let newArr = [1,2,3,4,5,6,7]
 
let chaiRes = newArr.filter((value) => value%2==0).map((value)=>value*1).reduce((prevVal,currenVal)=>prevVal+currenVal,0)
console.log(chaiRes);


console.log("*********Sort String")
let strArr = ["van","zeb","car"]  
console.log(strArr.sort()) //Only sort strtings not int 


console.log("*********Sort integer")
let intArr = [5,4,3,1,2]  
console.log(intArr.sort((a,b)=>a-b)) //Only sort strtings not int 



