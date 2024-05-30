//Arrays
let myArray = ['this', 'is', 'an', 'array'];

// Arrays are technically Objects!!
console.log(typeof myArray); //returns "object"

//Getting element of array at specific index
console.log(myArray[1]); // Returns is

// The Array.push("newElement") method adds new element to array
myArray.push('newElement'); 
console.log(myArray[4]) //logs newElement

//Because arrays are objects, you can access properties of an array
console.log(myArray.length); //returns 5
