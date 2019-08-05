// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// ---------------------------------------------
// Consider this variable:

var mantra = "Be the dev"

// 1a. Write the code that returns 'B' from mantra.

// console.log(mantra[0]);

// 1b. Write the code that determines if there is an 'x' in mantra.

// xChecker = (str) =>{
//   if(str.includes('x')){
//     return `${str} does have a x`
//   }else{
//     return 'no way, jose'
//   }
// }
// console.log(xChecker(mantra));
// console.log(xChecker('mantra'))

// 1c. Write the code that determines if there is a 'v' in mantra.

// vChecker = (str) =>{
//   if(str.includes('v')){
//     return `${str} does have a v`
//   }else{
//     return 'no way, jose'
//   }
// }
// console.log(vChecker(mantra));
// console.log(vChecker('mantra'));

// 1d. Stretch: Write a function that can take any letter as an argument and returns if it exists within the given string.

// strIncludesChar = (str, char) =>{
//   if(str.includes(char)){
//     return `yes, ${char} does exist in ${str}`
//   }else{
//     return `no, I don't see ${char} in ${str}`
//   }
// }
//
// console.log(strIncludesChar(mantra, 'e'));
// console.log(strIncludesChar(mantra, 's'));
// ---------------------------------------------------
// Consider the following variables:

var myDog = "Snoopy"
var myCat = "Garfield"

// 2a. Create a function that returns the longer of the two variables. Expected output: "Garfield"

// longerVar = (str1, str2) => {
//   if(str1.length > str2.length) {
//     return str1
//   }else if(str2.length > str1.length){
//     return str2
//   }else{
//     return `${str1} is the same length as ${str2}`
//   }
// }
//
// console.log(longerVar(myCat, myDog));
// console.log(longerVar(myDog, myCat));
// console.log(longerVar(myCat, myCat));


// 2b. Create a function that takes in two arguments and returns an array containing the two variables. Expected output: ["Snoopy", "Garfield"]

// putInArray = (str1, str2) => {
//   newArr = []
//   newArr.push(str1, str2)
//   return newArr
// }

// console.log(putInArray(myCat, myDog));

// 2c. Stretch: Write a function that returns the two variables in all lowercase letters.

// printsSmallChars = (str1, str2) => {
// return `${str1.toLowerCase()} and ${str2.toLowerCase()} are best friends`
// }
//
// console.log(printsSmallChars(myDog, myCat));

// -----------------------------------------------
// Consider this variable:

var myMessage = "Learning is fun!"

// 3a. Write the code that logs each letter of the message using a for loop.

// letterLooper = (str) => {
//   for(let i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// }
//
// letterLooper(myMessage)

// 4b. Stretch: Write the code that logs each letter of the message using a while loop.

// whileLogger = (str) => {
// let i = 0
// while (i < str.length){
//     console.log(str[i]);
//     i++
//   }
// }
//
// whileLogger(myMessage)

// 4c. Super Stretch: Write the code that logs each letter of the message using forEach().

// forEachLooper = (str) => {
//   arr = str.split('');
//   arr.forEach(function(arr){
//   console.log(arr);
// })
// }

// forEachLooper(myMessage)

// ----------------------------------------------
// Consider the following variable:

var testString = "thisisateststring"

// 5a. Write a function that takes the variable as an argument and returns the string without vowels. Expected output: "thsstststrng"

// vowelRemover = (str) => {
//   vowels = 'aeiou'
//   arr = []
//   for(let i = 0; i < str.length; i++) {
//     if(!vowels.includes(str[i])){
//       arr.push(str[i])
//     }
//   }
//   return arr.join('')
// }
//
// console.log(vowelRemover(testString));

// 5b. Stretch: Update your function to return an error message if the variable is not a string. Copy and paste your function to add these changes.

// stringChecker = (str) => {
//   let vowels = 'aeiou'
//   let arr = []
//   if(typeof str !== 'string'){
//     return "**ERROR** YOUR CODE IS NOT A STRING"
//   }
//     for(let i = 0; i < str.length; i++) {
//       if(!vowels.includes(str[i])){
//         arr.push(str[i])
//       }
//   }
//   return arr.join('')
// }
//
// console.log(stringChecker(testString));
// console.log(stringChecker(toonimals));

// ----------------------------------------------
// Consider the following variable:

var toonimals = [
  {name: "Itchy", animal: "mouse"},
  {name: "Stimpy", animal: "cat"},
  {name: "Daffy", animal: "duck"},
  {name: "Scratchy", animal: "cat"},
  {name: "Ren", animal: "dog"},
  {name: "Felix", animal: "cat"}
]


  // break;
// 6a. Write a function that takes in the toonimals array as an argument and returns an array with only the toon objects that are cats. Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]

// catToonimals = (arr) => {
//   newArr = []
//   for(let i = 0; i < arr.length; i++){
//   if(arr[i].animal === 'cat'){
//     newArr.push(arr[i])
//   }
// }
//   return newArr
// }
//
// console.log(catToonimals(toonimals))

//6b. Write a function that returns only the names of all the non-cats. Expected output: "Itchy" "Daffy" "Ren"

// noCatToonimals = (arr) => {
//   newArr = []
//   for(let i = 0; i < arr.length; i++){
//   if(arr[i].animal !== 'cat'){
//     newArr.push(arr[i].name)
//   }
// }
//   return newArr
// }
//
// console.log(noCatToonimals(toonimals))


//6c. Stretch: Create a function that will print a sentence for every toon stating their name and their animal type. Use string interpolation. Expected output: "Itchy is a mouse" "Stimpy is a cat" "Daffy is a duck" "Scratchy is a cat" "Ren is a dog" "Felix is a cat"

// toonInterpolator = (arr) => {
//   for(let i = 0; i < arr.length; i++){
//     console.log(`${arr[i].name} is a ${arr[i].animal}`)
//   }
// }
// toonInterpolator(toonimals)

//
// toonInterpolator = (arr) => {
//   arr.forEach(function(arr){
//   console.log(`${arr.name} is a ${arr.animal}`);
// })
// }
// toonInterpolator(toonimals)
