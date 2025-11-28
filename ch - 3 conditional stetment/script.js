/*
(1) if statement :-
            if (condition) {
                // code is true
            }

(2)if...else statement
        if (condition) {
            // code is true
        } else {
            // code is false
        }   

// (3) leader statement
            if (condition1) {
                // code is true
            } 
            else if (condition2) {
                // code is true
            } 
            else {
                // code is false
            }

// (4) nested if statement
        if (condition1) {
            if (condition2) {
                // code is true
            }
            else {
                // code is false
            }
        }
        else {
            // code is false
        }
*/

// (1) if statement example
let number = +prompt("Enter a number:");
if (number > 0) {
    console.log("The number is positive.");
    document.write("<h3>The number is positive.</h3>");
}
// (2) if...else statement example

let nber = +prompt("Enter a number:");
if (nber % 2 === 0) {
    console.log("The number is even.");
    document.write("<h3>The number is even.</h3>");
}
else {
    console.log("The number is odd.");
    document.write("<h3>The number is odd.</h3>");
}

// (3) leader stetment example
let age = +prompt("Enter your age:");

if (age < 0) {
    console.log("Invalid age");
    document.write("<h3>Invalid age</h3>");
}
else if (age > 100) {
    console.log("Age exceeds normal human lifespan");
    document.write("<h3>Age exceeds normal human lifespan</h3>");
}
else if (age < 18) {
    console.log("You are a minor.");
    document.write("<h3>You are a minor.</h3>");
}
else if (age < 60) {
    console.log("You are an adult.");
    document.write("<h3>You are an adult.</h3>");
}
else if (age < 80) {
    console.log("You are middle-aged.");
    document.write("<h3>You are middle-aged.</h3>");

}
else {
    console.log("You are a senior citizen.");
    document.write("<h3>You are a senior citizen.</h3>");

}

// (4) Nested if example
let num = +prompt("Enter a number:");

if (num >= 0) {
    if (num === 0) {
        console.log("The number is zero.");
        document.write("<h3>The number is zero.</h3>");
    }
    else {
        console.log("The number is positive.");
        document.write("<h3>The number is positive.</h3>");
    }
}
else {
    console.log("The number is negative.");
    document.write("<h3>The number is negative.</h3>");
}

// (5) ternary operator example
let num1 = +prompt("Enter a number:");
let result =
    (num1 % 2 === 0) ? "The number is even."
        : "The number is odd.";
console.log(result);
document.write("<h3>" + result + "</h3>");