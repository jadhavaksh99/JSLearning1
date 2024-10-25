console.log(`Below string is Given string `);
var givenString = "   Hey you are doing good, keep it up   ";
function stringHandsOn(){
    console.log(`(1)====print the string as it is on console=====`);
    console.log(`${givenString}`);
    console.log(`(2)===Calculate length of String===`);
    console.log(`Length of string is: ${givenString.length}`);
    console.log(`(3)=====Remove leading and trailing extraa spacesand logstring on console with its length`);
    var newString = givenString.trim();
    console.log(`${newString}`);
    console.log(typeof(newString));
    console.log(`Length of string after trim will be: ${newString.length}`);
    console.log(`(4)====Print the first ad last character on same line after trim()`);
    console.log(`First character is ${newString.charAt(0)} and Last character is ${newString.charAt((newString.length)-1)}`);
    console.log(`(5)====Print count of total words`);
    console.log(`Total words after trim is ${(newString.split(" ")).length}`);
    console.log(`(6)====print index of word good rom given string==`);
    var newArray = newString.split(" ")
    console.log(`Index of word good is ${newArray.indexOf("good")}`);
    console.log(`(7)===print the substring starting from index 22 using substring()`);
    console.log(`${newString.substring(22)}`)
    console.log(`(8)===Check if string ends with word "up" after step 3`);
    console.log(`${newString.endsWith("up")}`);
    console.log(`(9)===Check if string starts with word "Hey"`);
    console.log(`${newString.startsWith("Hey")}`);
    
    
    
    
    
    
    
    
    
    
    
    
}

stringHandsOn()