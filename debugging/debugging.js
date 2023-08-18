// Grasshopper - Function syntax debugging
// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// function main [verb, noun]
// return verb + noun
// }

// const main = (verb, noun) => verb + noun;

/////////////////////////////////////

// Debugging sayHello function
// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!
//
//     Example output:
//
//     Hello, Mr. Spock

// function sayHello(name) {
//     return 'Hello'
// }

// const sayHello = (name) => {
//     return `Hello, ${name}`
// }
//
// // or
//
// const sayHelloPartTwo = name => `Hello, ${name}`;

///////////////////////////////

// If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.
//
// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.
//
// The function receives one parameter health which will always be a whole number between -10 and 10.


// const checkAlive = (health) => {
//     if (health > 0) {
//         return true
//     } else {
//         return false
//     }
// }
//
// // or
//
// const checkAlive = (health) => {
//     return health > 0;
// }


//////////////////////////

// Debug celsius converter
// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.
//
//     Find the errors in the code to get the celsius converter working properly.
//
//     To convert fahrenheit to celsius:
//
//     celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// starting code
// function weatherInfo (temp) {
//     var c : convert(temp)
//     if (c > 0)
//         return (c + " is freezing temperature")
//     else
//         return (c + " is above freezing temperature")
// }
//
// function convertToCelsius (temperature) {
//     var celsius = (tempertur) - 32 + (5/9)
//     return temperature
// }

// my code

//
// const convertToCelsius = (fahrenheit) => {
//     const celsius = (fahrenheit - 32) * (5/9)
//     return celsius
// }
//
//
// const weatherInfo = (temp) => {
//     const c = convertToCelsius(Math.floor(temp));
//     if (c <= 0) {
//         return (`${c} is freezing temperature`)
//     } else {
//         return (`${c} is above freezing temperature`)
//     }
// }






///////////////////////////////
// other code result

// const weatherInfo = (temp) => {
//     const c = convertToCelsius(temp);
//     if (c <= 0) {
//         return (`${c} is freezing temperature`)
//     } else {
//         return (`${c} is above freezing temperature`)
//     }
// }
//
// const convertToCelsius = (fahrenheit) => {
//     const celsius = (fahrenheit - 32) * (5/9)
//     return celsius
// }






//////////////////////////////////




// Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
//
//    Example
        // 123  => 6
        // 223  => 7
        // 1337 => 14


// const getSumOfDigits = number => number.toString().split('').map(Number).reduce((a, b) => a + b);


// Name on billboard
// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).
//
// You can not use multiplier "*" operator.
//
//     If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).



// const billboard = (name, price = 30) => {
//     let total = 0
//     for (let i = 0; i < name.length; i++) {
//         total += price
//     }
//     return total;
// }
// console.log(billboard("Hadufuns John", 40))


// the second parameter is a default value in javascript but can be replaced by adding the second parameter when it is called
// example:
// ("Jeong-Ho Aristotelis") will be 600$
// ("Hadufuns John",20) will be 260$ because it replaces the default value of 30 to 20;

// Double Char
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "

function doubleChar(str) {
    let strReturn = '';
        for (let i = 0; i < str.length; i++) {
          strReturn = str[i * 2].length
        }
    return strReturn
}

console.log(doubleChar("String"))












