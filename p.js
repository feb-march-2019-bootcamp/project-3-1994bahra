function palindrome (string)
{
 //////first we need to regular expressiont patterns  to match character combinations in strings 
    let regularExpression=/[^A-Za-z0-9]/g; //// g is flag for global search

 /// second we need to (toLowerCase) method to return  call string value converted to lowercase and use (replace) method to return a new string with all matches of a Regular expression pattern 
    let smallstring=string.toLowerCase().replace(regularExpression,"");

///use (split) method to splits a String object into an array of strings by separating the string into sub strings
///and use (reverse) method to reverses an array the first array element becomes the last and the last becomes the first
///use (join) method to joins all elements of an array into a string
    let reversed=smallstring.split("").reverse().join("");

//////// then we need to create a coundition to cheak a truthy & falsey string palindrome
    if (reversed===smallstring) return true;
    
    return false;
}
 

console.log(palindrome("eye"));////// true//////////
console.log(palindrome("_eye"));////// true//////////

console.log(palindrome("racecar"));//////true///////
console.log(palindrome("RaceCar"));//////////////true///////////
console.log(palindrome("Race CAR"));//////////////true///////////

console.log(palindrome("2A3*3a2"));//////////////true///////////
console.log(palindrome("2A3 3a2"));//////////////true///////////
console.log(palindrome("2_A3*3#A2"));//////////////true///////////

console.log(palindrome("not a palindrome"));/////////////false////////////
console.log(palindrome("A man,a plan, a canal.panama"));/////////////true////////
console.log(palindrome("never odd or even"));///////////////true///////////
console.log(palindrome("nope")); ///////////////false///////////
console.log(palindrome("almostomla"));//////////////false//////////******** */
console.log(palindrome("My age is 0, 0 si ega ym."));///////////true///////
console.log(palindrome("1 eye for of 1 eye."));//////////false//////*********** */
console.log(palindrome("0_0 (: /-\ :) 0-0"));//////////true///////////
console.log(palindrome("five|\_/|four"));///////////false/////////

