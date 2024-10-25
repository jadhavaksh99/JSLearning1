//#1 Write any two functions with no arguments and no return type as per your choice
console.log("-----------function with no Argument no return value---");
function intro(){
    console.log("Introduction");
    
}
function skills(){
    console.log("My skills are HTML, CSS, JAVASCRIPT");
    
}



function personalDetails(firstName, lastName, collegeName){
    console.log("My first name is: ", firstName);
    console.log("My lastName name is: ", lastName);
    console.log("My college name is: ", collegeName);
}
intro()
skills()
console.log("-----------function with Argument no return value---");
personalDetails("Akshay", "Jadhav", "Raisoni")

// WAF with 3 parameters or arguments and it should log the addition
function addThreeValues(num1, num2, num3){
    console.log("Your numbers for addition are: ", num1, num2, num3);
    
    console.log("Addition of three values", num1 + num2 + num3);
    
}

console.log("-----------function with 3 Argument no return value---");

addThreeValues(10.23, 600, 40)

console.log("-----------function with 3 words Argument no return value---");

addThreeValues("Hello", "Good", "Morning")
