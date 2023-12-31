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
// const getDoubleChar = str => str.split('').reduce((a, b) => a + b + b, '');


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

// function doubleChar(str) {
//     let strReturn = '';
//         for (let i = 0; i < str.length; i++) {
//           strReturn += str[i] + str[i];
//         }
//     return strReturn
// }
//
// console.log(doubleChar("String"))

// console.log(getDoubleChar("String"))






// Welcome to the City

// Create a method that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.
//
//     Example:
//
// ['John', 'Smith'], 'Phoenix', 'Arizona'
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

// const sayHello = (name, city, state) => {
//     let person = name.join(' ')
//     return `Hello, ${person}! Welcome to ${city}, ${state}!`
// }



// Selective fear of numbers
// I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:
//
// Monday --> 12
//
// Tuesday --> numbers greater than 95
//
// Wednesday --> 34
//
// Thursday --> 0
//
// Friday --> numbers divisible by 2
//
// Saturday --> 56
//
// Sunday --> 666 or -666
//
// Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)



// my code which did not work
// const AmIAfraid = (day, num) => {
//     if (day === "Monday" && num === 12){
//         return true
//     } else if (day === "Tuesday" && num > 95){
//         return true
//     } else if (day === "Wednesday" && num === 34) {
//         return true
//     } else if (day === "Thursday" && num === 0) {
//         return true
//     } else if (day === "Friday" && num % 2 === 0) {
//         return true
//     } else if (day === "Saturday" && num === 56) {
//         return true
//     } else if (day === "Sunday" && (num === 666) || (num === -666)) {
//         return true
//     } else {
//         return false
//     }
// }



// other code that worked
// const AmIAfraid = (day, num) => {
//     if (day === 'Monday' && num === 12) {
//         return true
//     } else if (day === 'Tuesday' && num > 95) {
//         return true;
//     } else if (day === 'Wednesday' && num === 34) {
//         return true;
//     } else if (day === 'Thursday' && num === 0) {
//         return true;
//     } else if (day === 'Friday' && num % 2 === 0) {
//         return true;
//     } else if (day === 'Saturday' && num === 56) {
//         return true;
//     } else if (day === 'Sunday' && ((num === -666) || (num === 666))) {
//         return true;
//     }
//     return false;
// }






// NATO Phonetic Alphabet


// Complete the function word (string) and returns a string that spells the word using the NATO phonetic alphabet.
//
//     There should be a space between each word in the returned string, and the first letter of each word should be capitalized.
//
//     For those of you that don't want your fingers to bleed, this kata already has a dictionary typed out for you.
//
// Examples
// "hi"      -->  "Hotel India"
// "abc"     -->  "Alpha Bravo Charlie"
// "babble"  -->  "Bravo Alpha Bravo Bravo Lima Echo"
// "Banana"  -->  "Bravo Alpha November Alpha November Alpha"



var nato = (function() {
    var letters =  {
        "A": "Alpha",  "B": "Bravo",   "C": "Charlie",
        "D": "Delta",  "E": "Echo",    "F": "Foxtrot",
        "G": "Golf",   "H": "Hotel",   "I": "India",
        "J": "Juliett","K": "Kilo",    "L": "Lima",
        "M": "Mike",   "N": "November","O": "Oscar",
        "P": "Papa",   "Q": "Quebec",  "R": "Romeo",
        "S": "Sierra", "T": "Tango",   "U": "Uniform",
        "V": "Victor", "W": "Whiskey", "X": "X-ray",
        "Y": "Yankee", "Z": "Zulu"
    }

    return function(word) {
        return  [...word.toUpperCase()].map(v=>letters[v]).join(' ');
    }
})()












// Let's define a parameter of number n as the least common multiple (LCM) of the sum of its digits and their product.
//
// Calculate the parameter of the given number n.
//
//     Input/Output
//     [input] integer n
//
// A positive integer. It is guaranteed that no zero appears in n.
//
//     [output] an integer
//
// The parameter of the given number.
//
//     Example
// For n = 22, the output should be 4.
//
// Both the sum and the product of digits equal 4, and LCM(4, 4) = 4.
//
// For n = 1234, the output should be 120.
//
// 1+2+3+4=10 and 1*2*3*4=24, LCM(10,24)=120



function parameter(n) {
    const sum = String(n).split('').reduce((acc, val) => acc + +val, 0);
    const mult = String(n).split('').reduce((acc, val) => acc * +val, 1);
    let LCM = mult;

    while(n) {
        if(!(LCM % mult) && !(LCM % sum)) return LCM;
        LCM += mult;
    }
}







//////////////////// HEB Internship //////////////////////////////////

// Happy Numbers
// Programming challenge description:
//     A happy number is defined by the following process. Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.
//     Input:
// Your program should read lines of text from standard input. Each line contains a single positive integer, N.
//     Output:
// If the number is a happy number, print 1 to standard output. Otherwise, print 0.
//
// For the curious, here's why 7 is a happy number: 7->49->97->130->10->1. Here's why 22 is NOT a happy number: 22->8->64->52->29->85->89->145->42->20->4->16->37->58->89 ...
// Test 1
// Test Input
// Download Test 1 Input
// 1
// Expected Output
// Download Test 1 Output
// 1
// Test 2
// Test Input
// Download Test 2 Input
// 7
// Expected Output
// Download Test 2 Output
// 1
// Test 3
// Test Input
// Download Test 3 Input
// 22
// Expected Output
// Download Test 3 Output
// 0



process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
    stdin = `${stdin}${chunk}`;
}).on('end', () => {
    const lines = stdin.trim().split('\n');
    for (const line of lines) {
        process.stdout.write(`${line}\n`);
    }
});



process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
    stdin += chunk;
}).on('end', () => {
    const lines = stdin.trim().split('\n');
    for (const line of lines) {
        const n = parseInt(line);
        if (isHappyNumber(n)) {
            process.stdout.write('1\n');
        } else {
            process.stdout.write('0\n');
        }
    }
});

const isHappyNumber = (n) => {
    const seen = new Set();
    while (n !== 1) {
        n = String(n)
            .split('')
            .map(Number)
            .reduce((sum, digit) => sum + digit * digit, 0);
        if (seen.has(n)) {
            return false;
        }
        seen.add(n);
    }
    return true;
}



// 1. `process.stdin.resume();` and `process.stdin.setEncoding('utf8');`:
// - These lines prepare the standard input (stdin) to receive data. `process.stdin.resume();` resumes the stdin stream if it was paused, and `process.stdin.setEncoding('utf8');` sets the encoding for stdin to UTF-8.
//
// 2. `let stdin = '';`:
// - This initializes an empty string called `stdin`, which will be used to accumulate the input data.
//
// 3. `process.stdin.on('data', (chunk) => { ... })`:
// - This event listener listens for incoming data on stdin. When data is received, the provided callback function is executed.
// - `chunk` represents a piece of input data (usually a line of text) that is read from stdin.
// - Inside the callback function, the `chunk` is concatenated to the `stdin` string to accumulate the input.
//
// 4. `process.stdin.on('end', () => { ... })`:
// - This event listener is triggered when there's no more data to read from stdin, indicating the end of input.
// - Inside the callback function for 'end', the code processes the accumulated input.
//
// 5. `const lines = stdin.trim().split('\n');`:
// - Here, the `stdin` string is trimmed to remove any leading or trailing whitespace, and then it is split into an array of lines using `'\n'` (newline) as the separator. Each line represents one input number.
//
// 6. `for (const line of lines) { ... }`:
// - This loop iterates through each line of input.
//
// 7. `const n = parseInt(line);`:
// - Inside the loop, each line (representing a number) is converted to an integer using `parseInt()`. This allows us to work with the number as a numeric value.
//
// 8. `if (isHappyNumber(n)) { ... } else { ... }`:
// - For each parsed number, the code checks if it's a happy number using the `isHappyNumber` function.
//
// 9. `process.stdout.write('1\n');` and `process.stdout.write('0\n');`:
// - If the number is a happy number, the code prints '1' followed by a newline character ('\n') to standard output.
// - If the number is not a happy number, it prints '0' followed by a newline character to standard output.
//
// 10. `isHappyNumber` function:
// - The `isHappyNumber` function checks whether a given number is a happy number or not. It follows the algorithm described in the problem statement, repeatedly summing the squares of the digits until it either reaches 1 or enters a cycle.
//
//     So, the code reads lines of input, checks if each number is a happy number, and prints '1' or '0' accordingly for each number.







// Longest Word
// Programming challenge description:
//     In this challenge you need to find the longest word in a sentence. If the sentence has more than one word of the same length you should pick the one that appears first.
//     Input:
// Your program should read lines from standard input. Each line has one or more words. Each word is separated by a space char.
//     Output:
// Print the longest word in the sentence.
//     Test 1
// Test Input
// Download Test 1 Input
// some line with text
//     Expected Output
// Download Test 1 Output
// some
// Test 2
// Test Input
// Download Test 2 Input
// another line
// Expected Output
// Download Test 2 Output
// another


process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin.on('data', (chunk) => {
    stdin += chunk;
}).on('end', () => {
    const lines = stdin.trim().split('\n');

    for (const line of lines) {
        const words = line.split(' ');
        let longestWord = '';

        for (const word of words) {
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }

        process.stdout.write(`${longestWord}\n`);
    }
});

// refactored
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function findLongestWord(line) {
    const words = line.split(' ');
    return words.reduce((longest, current) => (current.length > longest.length ? current : longest), '');
}

rl.on('line', (input) => {
    const longestWord = findLongestWord(input);
    console.log(longestWord);
});









































































































































