//Objects:
let person = {
    name: "Joe",
    age: 21,
    occupation: "Unemployed",
}


// dot notation
console.log(person.age); // Returns 21

// bracket notation
console.log(person["occupation"]); // Returns Unemployed


// Adding new property to object
person.talents = ["music", "coding"];
console.log(person.talents[1]); // Returns coding

person.occupation = "Employed"; // Changes property of object
console.log(person["occupation"]); // Returns Employed


