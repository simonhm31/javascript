const myName = 'Joe King';
console.log(myName);

//Objects:
    let person = {
        name: "Joe",
        age: 21,
        occupation: "Unemployed"
    }

    //logging object to console
    console.log(person);
    //logging specific property of object
    console.log(person.occupation);




//Arrays
    let anArray = ['this', 'is', 'an', 'array'];

    console.log(anArray[1]); // logs 'is'

    anArray[4] = 'newElement'; // appends new element to end of array
    console.log(anArray[4]) //logs new element

    // Arrays are technically Objects!!
    console.log(typeof anArray); //returns "object"
    
    //Because arrays are objects, you can access properties of an array
    console.log(anArray.length); //returns 5



//Functions:
    //function: set of statements that performs a task or calculates a value - mosh

    function greet(firstName, lastName){
        console.log("Hello " + firstName + " " + lastName);

    }
    greet("John", "Johnson");
    greet("Joe", "Smith");

    //In this case, "firstName" is a parameter for the greet() function. "John" is 
    //NOT a parameter for the greet() function. John is an argument

    //parameter: a variable that only exists inside of a function
    //argument: the actual value that gets passed in when you call the function


    function square(number) {
        return number * number;
    }

    console.log(square(123123124.235235));


//Operators:

// There are 5 different types of Operators in JS
//     Arithmetic Operators
//     Assignment Operators
//     Comparison Operators
//     Logical Operators
//     Bitwise Operators



//Arithmetic Operators:
let x = 400;
let y = 20;

console.log(x + y); //x plus y
console.log(x - y); //x minus y
console.log(x * y); //x times y
console.log(x / y); // x divided by y
console.log(x % y); // what is the remainder when x is divded by y
console.log(x ** y); // x to the power of y

//Increment (++)
console.log(x++); // Logs x to the console, and THEN increments x. Returns 400
console.log(++x); // Increments x, and THEN logs x to the console. Returns 402!


//Decrement
console.log(--y); // Decrements y, and THEN logs it to the console. Returns 19.
console.log(y--); // Logs y to the console, and THEN decrements it. Returns 19.
console.log(y); //Returns 18. 

//Assignment Operators

    //The "=" assignment operator assigns the value 10 to x
    x = 10;
    y = 5;

    x = x + 5; // adding 5 to x
    x += 5; // using the addition assignment operator to add 5 to x
    console.log(x)  // returns 20;

    //Similar to the addition assignment operator:

    x -= 5;
    console.log(x); //returns 15

    x *= 5;
    console.log(x); //returns 75

    x /= 5; 
    console.log(x); //returns 15

    x %= 5; //Gets the remainder when x is divided by 5
    console.log(x); //returns 0

    x **= 5; // x to the power of 5, in this case x = 0 so 0 * 0 * 0 * 0 * 0
    console.log(x) //Returns 0

//Comparison Operators
    //comparison operators return a Boolean

    //Relational Operators:
    // > greater than
    // >= greater than or equal to
    // < less than
    // <= less than or equal to

    //Equality Operators
    // === is equal to
    // !== is not equal to

    x = 1;

    //Relational Operators
    console.log(x > 0); // returns true
    console.log(x >= 1); //returns true
    console.log(x < 1); //returns false
    console.log(x <= 1); //returns true

    //Equality Operators
    console.log(x === 1); //returns true
    console.log(x !== 1); //returns false


//Equality Operators

    //Strict Equality (checks for type AND value)
    console.log(1 === 1); //returns true
    console.log(1 === '1'); //returns false
    console.log(1 === true); //returns false

    //Loose Equality (adjusts type to make comparison possible )
    console.log( 1 == 1); // returns true
    console.log(1 == '1'); //returns true
    console.log(true == 1); //returns true



//Ternary (conditional) operator


    //If a customer has more than 100 points, they are a gold customer. Otherwise,
    //they are a silver customer.

    let points = 110;

    // If (points > 100) = true, then set typeOfCustomer to be gold. Else, set typeOfCustomer to be silver.
    let typeOfCustomer = points > 100 ? "gold" : "silver"; 
    console.log(typeOfCustomer); //returns gold

    points = 99;
    console.log(points); // returns 99
    console.log(typeOfCustomer); //returns GOLD. Even though points = 99 here, the ternary operator doesn't have that info

    //for typeOfCustomer to reflect current points, we have to make a new ternary oeprator
    let updatedtypeOfCustomer = points > 100 ? "gold" : "silver"; 
    console.log(updatedtypeOfCustomer); //returns silver


//Logical Operators
    //3 Logical Operators: Logical AND, logical OR, and NOT

    // Logical AND (&&)
    // Returns true if both operands are true
    console.log(true && true); //Returns true
    console.log(true && false); //Returns false

    let highIncome = true;
    let goodCreditScore = true;
    let eligibleForLoan = highIncome && goodCreditScore;
    console.log("Eligibility = " + eligibleForLoan); //Returns true

    //Logical OR (||)
    //Returns true if one of the operands is true

    console.log(true || false); // Returns true
    console.log(false || false); //Returns false

    let goodAtFrontEnd = false;
    let goodAtBackEnd = false;
    let fullStackDeveloper = goodAtFrontEnd || goodAtBackEnd;
    console.log(fullStackDeveloper); //Returns false

    // NOT (!)

    //If eligibleForLoan is true, !eligibleForLoan is false
    let applicationRefused = !eligibleForLoan;
    console.log("Application refused equals " + applicationRefused); //Returns false;


//Logical Operators with Non-Booleans

    console.log(false || true); //Returns true
    console.log(false || "Simon"); // Returns 'Simon'
    console.log(false || 1) //Returns 1

    //The result of a logical operator is NOT necessarily true or false

    //This is because of "truthy" and "falsy" values

    //Falsy values:
    // undefined
    // null
    // 0
    // false
    // '' (empty string)
    // NaN

    // Anything that is not Falsy -> Truthy


    //In this case, or (||) looks for the first Truthy value. 
    let userColor = 'red';
    let defaultColor = 'blue';
    let currentColor = userColor || defaultColor;

    console.log(currentColor); //Returns 'red

    //However if we change userColor to undefined, or (||) looks for the FIRST Truthy value which is now 'blue
    userColor = undefined;
    defaultColor = 'blue';
    currentColor = userColor || defaultColor;

    console.log(currentColor); //Returns Blue

    // Using the or (||) logical operator with non-Booleans can find Truthy/Falsey values



//Bitwise Operators

    // | (Bitwise OR)
    // & (Bitwise AND)

    console.log(1 | 2); //Returns 3
    console.log(1 & 2); //Returns 0

    //Bitwise Operators don't have as much practical application as Logical Operators 




//Exercise: Swapping Variables

    // Swap the values of a and b here to make the two console.log statements switch
    let a = 'red';
    let b = 'blue';

    a = 'blue';
    b = 'red';

    console.log(a); //Returns red
    console.log(b); //Returns blue



//If... Else


    // Write a program so that if hour is between 6 am - 12 pm: Good morning!
    // If it is between 12pm and 6pm: Good Afternoon!
    // Otherwise: Good night!

    let hour = 17;

    if (hour >= 6 && hour < 12) {
        console.log('Good Morning');
    }
    else if (hour >= 12 && hour < 18) {
        console.log('Good Afternoon');
    }
    else {
        console.log('Good Night');
    }
    


//Switch... case

    //Log the type of a user based on their role

    let role = "guest";

    // Returns "Guest User"
    switch(role) {
        case "guest":
            console.log("Guest User");
            break;

        case 'Moderator':
            console.log("Moderator User");
            break;

        default:
            console.log("Unknown User");
    }

    //Writing the same program using if... else

    role = "Guest";

    //returns "Unknown User"
    if(role === "guest"){
        console.log("Guest User");
    }
    else if (role === "Moderator"){
        console.log("Moderator User")
    }
    else {
        console.log("Unknown User");
    }


//For

    //Printing all the odd numbers 0 < 5, returns 1 and 3
    for(let i = 0; i < 5; i++){
        if(i%2 !== 0){
            console.log("This is an odd number: ", i)
        }
    };

//While

