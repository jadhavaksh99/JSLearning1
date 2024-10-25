console.log(`----03-stringBasicAssig01 - String Basic Assignments using String Template---`);
function stringBasics(){
    console.log(`This function is with no arguments and no return value`);
    console.log(`My hobbies are ${myHobby1}, ${myHobby2}, ${myHobby3}`);
    
    
}
var myHobby1 = "reading";
var myHobby2 = "cycling";
var myHobby3 = "swimming";

stringBasics()

var hobbyOne = myHobby1.length;
var hobbyTwo = myHobby2.length;
var hobbyThree = myHobby3.length;

console.log(`Sum of Total characters in hobby1, hobby2, hobby3 is:`, hobbyOne+hobbyTwo+hobbyThree);
